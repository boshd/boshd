import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";
import Author from "../models/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="font-body">
        <PostTitle>{title}</PostTitle>
        <div className="mb-6 text-lg text-slate-500">
          <DateFormatter dateString={date} />
        </div>
        {coverImage != null ? (
          <div className="mb-8 md:mb-16 sm:mx-0">
            <CoverImage title={title} src={coverImage} />
          </div>
        ) : (
          <div />
        )}


        {/* <div className="mb-6 text-lg">
          ~2 min read
        </div> */}
      </div>
    </>
  );
};

export default PostHeader;
