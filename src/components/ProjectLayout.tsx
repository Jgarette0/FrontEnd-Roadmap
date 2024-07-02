import { Card } from "./ui/card";

const ProjectLayout = () => {
  return (
    <>
      <Card className="px-2 flex flex-col w-full border-none">
        <div>
          <Card className="md:rounded-[20px] rounded-[10px] overflow-hidden">
            <iframe
              src="https://badminton.pinamungajan.com"
              width="100%"
              height="600px"
            ></iframe>
          </Card>
        </div>
      </Card>
    </>
  );
};
export default ProjectLayout;
