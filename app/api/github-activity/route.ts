import { NextResponse } from "next/server";

export interface CommitActivity {
  id: string;
  message: string;
  repo: string;
  timestamp: string;
  url: string;
}

const FALLBACK_ACTIVITY: CommitActivity[] = [
  {
    id: "c1",
    message: "feat: implement linear-grade bento architecture",
    repo: "itWADURA/official-website",
    timestamp: "2h ago",
    url: "https://github.com/itWADURA/official-website",
  },
  {
    id: "c2",
    message: "perf: optimize edge streaming & hydration pipeline",
    repo: "itWADURA/official-website",
    timestamp: "5h ago",
    url: "https://github.com/itWADURA/official-website",
  },
  {
    id: "c3",
    message: "chore: upgrade to Next.js 16 & React 19 core",
    repo: "itWADURA/official-website",
    timestamp: "1d ago",
    url: "https://github.com/itWADURA/official-website",
  },
];

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "itWADURA-Website",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      "https://api.github.com/users/itWADURA/events/public?per_page=5",
      {
        headers,
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      // Return curated fallback activity if rate-limited or unauthenticated
      return NextResponse.json({
        success: true,
        source: "cached",
        activities: FALLBACK_ACTIVITY,
      });
    }

    interface GitHubEvent {
      id: string;
      type: string;
      repo: { name: string };
      created_at: string;
      payload?: {
        commits?: Array<{ message: string; sha: string }>;
      };
    }

    const events: GitHubEvent[] = await response.json();
    const pushEvents = events.filter((e) => e.type === "PushEvent" && e.payload?.commits?.length);

    if (pushEvents.length === 0) {
      return NextResponse.json({
        success: true,
        source: "cached",
        activities: FALLBACK_ACTIVITY,
      });
    }

    const liveActivities: CommitActivity[] = pushEvents.slice(0, 3).map((e) => {
      const commit = e.payload?.commits?.[0];
      const timeDiff = Math.floor((Date.now() - new Date(e.created_at).getTime()) / (1000 * 60 * 60));
      const timeString = timeDiff < 1 ? "Just now" : timeDiff === 1 ? "1h ago" : `${timeDiff}h ago`;

      return {
        id: e.id,
        message: commit?.message || "chore: repository update",
        repo: e.repo.name,
        timestamp: timeString,
        url: `https://github.com/${e.repo.name}`,
      };
    });

    return NextResponse.json({
      success: true,
      source: "live",
      activities: liveActivities,
    });
  } catch (err) {
    console.warn("[GITHUB_API_FETCH_FALLBACK]:", err);
    return NextResponse.json({
      success: true,
      source: "cached",
      activities: FALLBACK_ACTIVITY,
    });
  }
}
