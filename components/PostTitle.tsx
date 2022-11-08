import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-1xl md:text-1xl lg:text-5xl drop-shadow-2xl font-display font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
