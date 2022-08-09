import { useRouter } from "next/router";
const NamePage = () => {
  const route = useRouter();
  const path = route.pathname.split("/app/");
  return (
    <p className="uppercase md:capitalize font-bold text-sm tracking-wider">
      {path}
    </p>
  );
};

export default NamePage;
