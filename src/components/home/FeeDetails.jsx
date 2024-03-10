export default function FeeDetails() {
    return (
        <div className="flex flex-col justify-center items-center w-full my-8 px-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 text-center pb-8">FEE <span className="text-yellow">DETAILS</span></h1>
            <ul className="list-disc flex flex-col md:text-lg pl-4">
                <li>UG Students / PG Students / Research Scholars: <span className="font-semibold">500INR*</span></li>
                <li>Faculty: <span className="font-semibold">700INR*</span></li>
                <li>For Foreign Authors: <span className="font-semibold">$170</span></li>
                <p className="font-semibold pt-5 -ml-4">*Publication Charges Extra</p>
            </ul>
        </div>
    )
}