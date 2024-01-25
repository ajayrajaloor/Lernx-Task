import React from "react";
import { TfiTimer } from "react-icons/tfi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import postsData from "./postData.json";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineImage } from "react-icons/md";

const Posts = () => {
  return (
    <div className="pl-5">
      {postsData.map((post) => (
        <div key={post.id} className="mb-8">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              {post.avatar && (
                <div>
                  <img
                    src={post.avatar}
                    alt="image"
                    className="rounded-full border border-gray-200 w-10 h-10"
                  />
                </div>
              )}
              <div className="ml-3">
                <div>{post.name}</div>
                <div className="flex flex-row gap-2 h-[1rem] items-center mt-1">
                  <div className="text-md text-gray-500">
                    <TfiTimer />
                  </div>
                  <div className="text-xs">{post.timeAgo}</div>
                  {post.community && (
                    <div className="text-purple-800">{post.community}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row h-[1rem] items-center gap-2 pr-5 pt-2">
              <div className="border border-gray-200 rounded-full p-1 bg-blue-500 text-white">
                <MdOutlineModeEditOutline />
              </div>
              <div className="border border-gray-200 rounded-full p-1 bg-blue-500 text-white">
                <RiDeleteBin5Line />
              </div>
            </div>
          </div>
          {post.image ? (
            <div className="flex flex-col mt-3">
              <div className="pr-5">
                <img
                  src={post.image}
                  alt="postimage"
                  className="w-full h-[15rem] rounded-lg"
                />
              </div>
              <div className="flex flex-row gap-8 pl-3 pt-6 h-[1rem] items-center">
                {post.likes !== undefined && (
                  <div className="flex flex-row h-[1rem] items-center gap-1 text-blue-800">
                    <div className="text-xl">
                      <BiSolidLike />
                    </div>
                    <p>{post.likes}</p>
                  </div>
                )}
                {post.comments !== undefined && (
                  <div className="flex flex-row h-[1rem] items-center gap-1 opacity-70">
                    <div className="text-xl">
                      <BiCommentDetail />
                    </div>
                    <p>{post.comments}</p>
                  </div>
                )}
                <div>
                  <div className="text-xl opacity-70">
                    <LuSend />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-sm pl-10 mt-2 pr-5">
              {post.content}
              <div className="flex flex-row gap-8 pl-3 pt-6 h-[1rem] items-center">
                {post.likes !== undefined && (
                  <div className="flex flex-row h-[1rem] items-center gap-1 text-blue-800">
                    <div className="text-xl">
                      <BiSolidLike />
                    </div>
                    <p>{post.likes}</p>
                  </div>
                )}
                {post.comments !== undefined && (
                  <div className="flex flex-row h-[1rem] items-center gap-1 opacity-70">
                    <div className="text-xl">
                      <BiCommentDetail />
                    </div>
                    <p>{post.comments}</p>
                  </div>
                )}
                <div>
                  <div className="text-xl opacity-70">
                    <LuSend />
                  </div>
                </div>
              </div>
            </div>
          )}
          <hr class="h-px my-5  bg-gray-200 border-0 dark:bg-gray-700" />
          {post.sender && post.senderAvatar && post.replyContent && (
            <div>
              <div className="flex flex-row gap-2">
                <div>
                  <img
                    className="rounded-full border border-gray-200 w-8 h-8"
                    src={post.senderAvatar}
                    alt="image"
                  />
                </div>
                <div>{post.sender}</div>
              </div>
              <div className="flex flex-col">
                <div>
                  <div className="w-[23rem] text-base opacity-95 pl-10">
                    {post.replyContent}
                  </div>
                  {post.replyLikes !== undefined &&
                    post.replyReplies !== undefined && (
                      <div className="flex flex-row opacity-60 text-sm mt-2 pl-10 gap-6">
                        {post.replyLikes !== undefined && <div>Like</div>}
                        {post.replyReplies !== undefined && <div>Reply</div>}
                        {post.replyReplies !== undefined && (
                          <div>{post.replyReplies} Reply</div>
                        )}
                      </div>
                    )}
                </div>
                {post.replySender && post.replySenderAvatar && (
                  <div className="flex flex-col mt-4 pl-10">
                    <div className="flex flex-row gap-2">
                      <div>
                        <img
                          className="rounded-full border border-gray-200 w-7 h-7"
                          src={post.replySenderAvatar}
                          alt="image"
                        />
                      </div>
                      <div>{post.replySender}</div>
                    </div>
                    {post.replySenderContent && (
                      <div className="opacity-95 pl-9 w-[23rem]">
                        {post.replySenderContent}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="pl-28 mt-6 text-gray-600">Load more comments</div>
        </div>
      ))}

      <div className="flex flex-row md:flex-row items-center rounded-3xl bg-gray-100 justify-between ">
        <div className="flex flex-row md:flex-row ">
          <div  className="mb-4 md:mb-0 md:mr-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdsC6_g4tHOfg6UsEMCzvW4cqwK6nXUCljg&usqp=CAU"
              alt=""
              className="w-10 h-10 border rounded-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your text"
              className="p-2 border-none rounded-3xl bg-transparent focus:outline-none w-full md:w-96"
            />
          </div>
        </div>

        <div className="flex flex-row pr-1">
          <div className="icon p-2  rounded-full">
            <FaRegSmile size={20} />
          </div>
          <div className="icon p-2 rounded-full">
            <MdOutlineImage size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
