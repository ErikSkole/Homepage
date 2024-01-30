import Link from "next/link";

export default function TempLowerPage() {
    return (
        <>
        <div className="tempContent flex flex-col justify-center items-center mb-40">
          <h1 className="tempHeader flex mb-6">Projects</h1>
          <div className="lineObject mb-16"></div>
          <Link className="tempImg flex" href="/projects"></Link>
        </div>
        </>
    )
}