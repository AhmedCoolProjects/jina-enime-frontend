import { Paper, IconButton, Button } from "@mui/material";
import Image from "next/image";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useAppSelector } from "../../store";

type props = {
  title: string;
  description: string;
  status: string;
  worker_id: string;
  date: string;
  image: string;
  type: string;
};

export function ReclamationCard(props: props) {
  const { title, description, status, worker_id, date, image, type } = props;
  const isDark = useAppSelector((state) => state.mode.isDark);

  return (
    <Paper elevation={3}>
      <div className="relative w-full h-[250px]">
        <Image src={image} layout="fill" alt="image" objectFit="cover" />
      </div>
      <div className="p-3 ">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className="text-sm truncate">{description}</h1>
        <div className="flex flex-row items-center ">
          <h1>{status}</h1>
          <IconButton className="ml-2">
            {status === "Pending" ? (
              <MdOutlinePending color="orange" size={25} />
            ) : status === "Refused" ? (
              <ImCross color="red" size={22} />
            ) : status === "Completed" ? (
              <MdDone color="green" size={25} />
            ) : (
              <AiOutlineFieldTime color="orange" size={25} />
            )}
          </IconButton>
        </div>
        <Button
          className="mt-3"
          color={isDark ? "primary" : "secondary"}
          fullWidth
        >
          plus d&apos;info
        </Button>
      </div>
    </Paper>
  );
}
