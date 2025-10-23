interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, text, avatar }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:w-80 flex flex-col gap-3">
      <p className="text-[#5E6282] italic font-poppins font-light text-xs">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3 mt-4">
        <img
          src='/public/img.png'
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium font-poppins text-sm text-[#5E6282] ">{name}</p>
          <p className="text-xs font-light text-[#5E6282] font-poppins">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
