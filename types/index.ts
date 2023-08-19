export type Tool = {
  name: string;
  description: string;
  url: string;
  image: string;
  createAt: string;
  recommendBy: string
}

export type Category = {
  name: string;
  page: string
}

export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

export type SocialLinksType = {
  [link: string]: string;
};

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
};


export type GithubUserType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};


