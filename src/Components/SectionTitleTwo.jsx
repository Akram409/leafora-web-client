
const SectionTitleTwo = ({ text,second }) => {
    return (
        <div className="text-center my-8">
            <h1 className="text-4xl font-bold font-serif"><span className="text-green-300">{text}</span> <span className="text-green-900">{second}</span></h1>
            <div className="w-1/12 h-1 bg-green-600 mx-auto mt-2 rounded"></div>
        </div>
    );
};

export default SectionTitleTwo;
