import type { ReactElement } from "react";

type JobProps = {
  header: string;
  children: ReactElement;
  dateEnd?: string;
  dateStart: string;
  image?: string;
  role: string;
};

export const Job = ({
  header,
  children,
  dateEnd,
  dateStart,
  image,
  role,
}: JobProps) => {
  return (
    <>
      <p
        style={{
          fontStyle: "italic",
          color: "var(--subtitle)",
          margin: "0 0 0 0",
          transform: "translateY(1rem)",
        }}
      >
        {role}
      </p>
      <div className="App-grid-main-content-span">
        <div className="App-grid-main-content-span-header">
          {image && <img src={`logos/${image}`} alt="" />}
          <h3 className="clampText">{header}</h3>
        </div>
        <p className="subtitle">
          {dateStart} - {dateEnd ?? "Now"}
        </p>
      </div>
      {children}
    </>
  );
};
