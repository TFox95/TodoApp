import * as React from "react";

const HighlightCard = (props: any) => {

  return (
    <div className={React.Children.toArray(props.styles).join(" ")}>
      <div className={props.block}>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <h6 className={props.disclaimerStyle}>{props.disclaimer}</h6>
      </div>
      <div className={props.sourceType}>
        <img src={props.source} alt=" uh oh something went wrong here..."/>
      </div>
    </div>
  )
};

export default HighlightCard;