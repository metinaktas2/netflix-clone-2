import { ShieldAlert } from "lucide-react";

const Error = ({ info }) => {
  return (
    <div className="flex flex-col my-40 justify-center gap-4 items-center">
      <ShieldAlert className="text-red-500 size-10" />
      <h1 className="text-2xl font-semibold">Üzgünüz Bir Sorun Oluştu...</h1>
      <p className="text-gray-200">{info}</p>
    </div>
  );
};

export default Error;
