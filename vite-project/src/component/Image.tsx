interface Iprobs {
  src: string;
  alt: string;
  classname: string;
}
const Image = ({ src, alt, classname }: Iprobs) => {
    return <img src={src} alt={alt} className={classname} />;
    }

    export default Image;