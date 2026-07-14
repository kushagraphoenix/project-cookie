export interface StoryParagraph {
  id: string;

  text: string;

  pause?: number;

  photo?: {
  id: string;
};

  music?: string;
}

export interface StoryPage {
  id: string;

  title: string;

  paragraphs: StoryParagraph[];

  next?: string;
}

export interface StoryState {
  currentPage: string;

  isWriting: boolean;

  hasFinishedPage: boolean;

  visitedPages: string[];
}