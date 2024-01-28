import TempLowerPage from "./components/tempComponents/tempLowerPage";

export default function Home() {
  return (
    <main className='mainContent flex flex-col'>
      <div className='mainHeaderContainer flex flex-col items-center justify-center mb-80 p-48'>
        <h1 className='mainHeader flex'>Welcome</h1>
        <p className='mainUnder flex'>This is my website</p>
      </div>
      <div className="lowerPage flex items-start justify-evenly pt-80">
        <div className="arrowLower">
        </div>
        <div className="rightCol flex flex-col">
          <TempLowerPage />
          <TempLowerPage />
        </div>
        <div className="leftCol flex flex-col mt-80">
          <TempLowerPage />
        </div>
      </div>
    </main>
  )
}
