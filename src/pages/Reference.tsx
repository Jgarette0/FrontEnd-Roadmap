import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import ReferenceList from "@/components/Ref";
import References from "@/components/References";

export function ReferencePage() {
  return (
    <>
      <div className="flex flex-col w-full px-2 place-items-center">
        <div className="pb-4 w-full">
          <Header />
        </div>
        <References />
        <div className="px-2 w-full">
          <ReferenceList />
        </div>
        <div className="w-full p-2">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ReferencePage;
