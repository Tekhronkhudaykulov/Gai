import { FC, ReactNode } from "react";

interface Props {
  child?: ReactNode;
}

const PrivateRoute: FC<Props> = ({ child }) => {
  return (
    <>
      <div className="h-full">{child}</div>
    </>
  );
};

export default PrivateRoute;
