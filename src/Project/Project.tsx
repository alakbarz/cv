import type { ReactElement } from "react";

type ProjectProps = {
  heading: string;
  link?: string;
  period?: string;
  children?: ReactElement;
};

export const Project = ({ heading, link, period, children }: ProjectProps) => {
  return link ? (
    <>
      <div className="App-grid-main-content-span">
        <div className="App-grid-main-content-span-header">
          <a href={link}>
            <h4 className="App-grid-main-content-span-header-heading">
              {heading}
            </h4>
          </a>
        </div>
        <p className="subtitle">{period}</p>
      </div>
      {children}
    </>
  ) : (
    <>
      <div className="App-grid-main-content-span">
        <div className="App-grid-main-content-span-header">
          <h4 className="App-grid-main-content-span-header-heading">
            {heading}
          </h4>
        </div>
        <p className="subtitle">{period}</p>
      </div>
      {children}
    </>
  );
};
