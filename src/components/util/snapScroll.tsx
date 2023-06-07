import React, {
  Children,
  type PropsWithChildren,
  type CSSProperties,
} from "react";

interface Props {
  sections: string[];
  containerStyle?: CSSProperties;
  sectionStyle?: CSSProperties;
}

const SnapScroll = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div
      className="container"
      style={{
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        ...props.containerStyle,
      }}
    >
      {Children.toArray(props.children).map((child: any, index: number) => {
        return (
          <section
            id={props.sections[index]}
            className="child"
            style={{
              border: "solid 1px orange",
              scrollSnapAlign: "start",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ...props.sectionStyle,
            }}
            key={index}
          >
            {child}
          </section>
        );
      })}
    </div>
  );
};

export default SnapScroll;
