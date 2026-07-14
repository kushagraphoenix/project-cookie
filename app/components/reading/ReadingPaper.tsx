"use client";

import PaperBackground from "./PaperBackground";
import PaperBorder from "./PaperBorder";
import PaperFold from "./PaperFold";
import PaperTexture from "./PaperTexture";
import PaperEdge from "./PaperEdge";

export default function ReadingPaper() {
  return (
    <>
      <PaperBackground />
      <PaperTexture />
      <PaperEdge />
      <PaperBorder />
      <PaperFold />
    </>
  );
}