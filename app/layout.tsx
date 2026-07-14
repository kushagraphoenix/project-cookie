import "./globals.css";

import { StoryProvider } from "./context/StoryContext";
import { LetterProvider } from "./context/LetterContext";
import { LetterStoryProvider } from "./context/LetterStoryContext";
import { StoryEngineProvider } from "./context/StoryEngine";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoryProvider>
          <StoryEngineProvider>
            <LetterProvider>
              <LetterStoryProvider>
                {children}
              </LetterStoryProvider>
            </LetterProvider>
          </StoryEngineProvider>
        </StoryProvider>
      </body>
    </html>
  );
}