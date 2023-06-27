import '../Main/Main.scss';

const Main = ({ children, classData }) => {

  return (
    <main className={classData}>
        {children}
    </main>
  )
}

export default Main