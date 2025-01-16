
const SectionTitle = ({ text }) => {
    return (
        <div className="text-center my-8">
            <h1 className="text-4xl font-bold text-green-600 font-serif">{text}</h1>
            <div className="w-1/12 h-1 bg-green-600 mx-auto mt-2 rounded"></div>
        </div>
    );
};

export default SectionTitle;
