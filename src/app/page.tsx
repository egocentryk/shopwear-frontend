import Image from "next/image";
import getProfile from "./get-profile"

export default async function Home() {
  const profile = await getProfile();

  console.log(profile)
  return (
    <></>
  );
}
