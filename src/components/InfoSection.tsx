const InfoSection = ({
    title,
    description,
    image
  }: {
    title: string;
    description: string;
    image: string;
  }) => {
  return (
    <section>
      <div className="text-container">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} /> 
      </div>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default InfoSection;