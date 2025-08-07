import FirstBlock from "./FirstBlock/FirstBlock";
import SecondBlock from "./SecondBlockCar/SecondBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";

function MainPage() {
  return (
    <>
      <div className="overflow-hidden">
        <FirstBlock />
      </div>
      <div className="overflow-hidden">
        <SecondBlock />
      </div>
      <div className="overflow-hidden">
        <ThirdBlock />
      </div>
    </>
  );
}

export default MainPage;
