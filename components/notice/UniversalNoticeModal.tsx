import { useReactiveVar } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import { universalModalVar } from "../../graphql/reactivities/modalVariable";

const UniversalNoticeModal = () => {
  const universalModal = useReactiveVar(universalModalVar);
  return (
    <AnimatePresence>
      {universalModal && (
        <div className="px-5 fixed z-20 h-full w-full flex items-center justify-center top-0 left-0">
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: "-100vw",
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.9 }}
            className="absolute z-10 p-5 bg-green-400 h-[90%] w-5/6 rounded text-white "
          >
            <button
              onClick={() => universalModalVar(!universalModalVar())}
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-yellow-700 text-white border
               border-white h-8 w-8 block mb-2 rounded-full"
            >
              &times;
            </button>
            {/* <div className="absolute top-0 left-0 bottom-0 right-0  "> */}
            <div className="absolute h-full w-full left-0 right-0 top-0 p-5 overflow-hidden ">
              <div className="absolute overflow-y-auto h-full">
                <div>
                  <h1 className="capitalize font-bold text-2xl text-center">
                    plz.., read me
                  </h1>
                </div>
                <div className="">
                  <div>
                    <p className="text-yellow-200 font-medium">
                      some vulnerabilities =&#62;
                    </p>
                    <p className="py-1">
                      <span className="font-bold">
                        1. could be little slow :{" "}
                      </span>{" "}
                      I am using Apollo Graphql. But In node v14, Apollo Graphql
                      Upload type is not support anymore. That's why I am using
                      bese64 image and store directly in mongoDB altas. This is
                      a little bit overload for free hosting. And as a result
                      site gets slow.
                    </p>
                    <p className="py-1">
                      <span className="font-bold">2. hard reloading : </span>I
                      dont know why sometimes clicking on Link site gets reload
                      and sometiems doesn't. But in production working fine 90%.
                    </p>
                    <p className="py-1">
                      <span className="font-bold">3. stripe payment : </span>
                      Clicking on stripe payment button, sometimes stripe modal
                      is getting open and sometimes isn't. May be it's a
                      networking issue. But specifically I dont know why it
                      doest that nasty work.
                    </p>
                    <p className="py-1">
                      <span className="font-bold">
                        4. send email on spam :{" "}
                      </span>
                      Reset password link and order invoice could be send in
                      spam. But more likely it will behave as normal.
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-yellow-200 font-medium">
                      some features it provides =&#62;
                    </p>
                    <p className="py-1">
                      <span className="font-bold">
                        1. state management with apollo graphql client :{" "}
                      </span>
                      I am using apollo-client instead of redux because of its{" "}
                      <span className="font-bold text-black">cache</span> and{" "}
                      <span className="font-bold text-black">
                        reactive variables
                      </span>{" "}
                      . If already have data in cache , never request to server
                      again for the same data. I really like that concept.
                    </p>
                    <p className="py-1">
                      <span className="font-bold">
                        2. role based authentication using graphql with multiple
                        layouts :{" "}
                      </span>{" "}
                      For admin panel and for normal I have separated their
                      login and register page and design differently.
                    </p>
                    <p className="py-1">
                      <span className="font-bold">3. send email : </span>
                      Using node mailer and graphql sending email by gmail
                      (reset password link , order invoice)
                    </p>
                    <p className="py-1">
                      <span className="font-bold">
                        4. shopping cart using reactive variables :{" "}
                      </span>
                      the shopping cart is advaned. It will add product
                      according to stock. If stock is 0, product will not add.
                    </p>
                    <p className="py-1">
                      <span className="font-bold">
                        5. skeleton Loading & Reponsiveness :{" "}
                      </span>
                      I have used skeleton loading with animation. And this site
                      is very responsive even if it is 4k monitor.
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold text-black">
                      As I have learned those technologies completely by myself
                      from google and youtube , it is very easy to make
                      mistakes. I believe youtube and google is not enough to go
                      dept of those technologies and make big projects. As I
                      have achieved those, I am very very confident that, I can
                      achieve more if I have a chance working with your company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => universalModalVar(!universalModalVar())}
            className="bg-[rgba(0,0,0,0.5)]  px-5 fixed h-full w-full flex items-center justify-center
             top-0 left-0"
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default UniversalNoticeModal;