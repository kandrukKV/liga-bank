import './main.scss';

const Main = (props) => {
  const {mainTitle} = props;
  return (
    <main className="main">
      <h1 className="main__title">{mainTitle}</h1>
      {props.children}
    </main>
  );
}

export default Main;
