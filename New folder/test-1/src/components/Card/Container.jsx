import React from "react";
import Card from "./Card";
import "./Container.css";
const Container = () => {
  return (
    <div className="container">
      <Card name="John cena" job="Web Developer" age="30" />
      <Card name="Jane Doe" job="UX Designer" age="28" />
      <Card name="Bob Smith" job="Software Engineer" age="32" />
      <Card name="Alice Johnson" job="Data Scientist" age="25" />
      <Card name="Mike Brown" job="DevOps Engineer" age="35" />
      <Card name="Sarah Lee" job="Product Manager" age="29" />
      <Card name="David Kim" job="QA Engineer" age="27" />
      <Card name="Emily Chen" job="Technical Writer" age="31" />
    </div>
  );
};

export default Container;
