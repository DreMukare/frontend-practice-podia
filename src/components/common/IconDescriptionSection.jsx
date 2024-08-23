import IconDescription from "./IconDescription";

const IconDescriptionSection = (props) => {
  const { iconDescriptions } = props;

  return (
    <div
      style={{
        margin: "2.5em 0",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      {iconDescriptions.map((description, key) => {
        return (
          <IconDescription
            title={description.title}
            description={description.description}
            icon={description.icon}
          />
        );
      })}
    </div>
  );
};

export default IconDescriptionSection;
