import React from "react";
import DOMPurify from "dompurify";
import "./HtmlParser.css";

export interface HtmlParserProps {
  html?: string;
}

const HtmlParser: React.FC<HtmlParserProps> = ({ html }) => {
  const cleanHtml = DOMPurify.sanitize(html || "");
  return (
    <>
      <div
        className="html-parsed"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </>
  );
};

export default HtmlParser;
