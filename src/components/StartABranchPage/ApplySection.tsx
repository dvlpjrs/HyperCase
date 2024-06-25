export const ApplySection = () => {
  return (
    <section className="flex w-full flex-col rounded-[30px] border-2 border-border font-sfProDisplay lg:flex-row">
      <div className="min-h-full w-full border-b-2 border-r-0 border-border px-8 py-7 text-2xl tracking-tight md:px-16 lg:w-1/2 lg:border-b-0 lg:border-r-2 lg:pl-[58px]">
        Apply
      </div>
      <div className="min-h-fit w-full p-8 text-foreground lg:w-1/2">
        <form
          className="grid w-full grid-cols-2 gap-x-4 gap-y-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="col-span-2 flex flex-col md:col-span-1">
            <label
              htmlFor="first_name"
              className="mb-1 self-start rounded-lg p-0.5"
            >
              First Name
              <span>*</span>
            </label>
            <input
              name="first_name"
              type="text"
              placeholder="Your name"
              required
              className="h-auto w-full appearance-none rounded-xl border-none p-3 shadow-[rgb(0,153,255)_0px_0px_0px_0px_inset,rgb(234,236,240)_0px_0px_0px_1px_inset] ring-0"
            />
          </div>
          <div className="col-span-2 flex flex-col md:col-span-1">
            <label
              htmlFor="last_name"
              className="mb-1 self-start rounded-lg p-0.5"
            >
              Last Name<span>*</span>
            </label>
            <input
              name="last_name"
              type="text"
              placeholder="Your Surname"
              required
              className="h-auto w-full appearance-none rounded-xl border-none p-3 shadow-[rgb(0,153,255)_0px_0px_0px_0px_inset,rgb(234,236,240)_0px_0px_0px_1px_inset] ring-0"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="email" className="mb-1 self-start rounded-lg p-0.5">
              Email<span>*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
              className="h-auto w-full appearance-none rounded-xl border-none p-3 shadow-[rgb(0,153,255)_0px_0px_0px_0px_inset,rgb(234,236,240)_0px_0px_0px_1px_inset] ring-0"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label
              htmlFor="message"
              className="mb-1 self-start rounded-lg p-0.5"
            >
              Message<span>*</span>
            </label>
            <textarea
              name="message"
              placeholder="Enter your message here..."
              required
              className="h-auto w-full appearance-none rounded-xl border-none p-3 shadow-[rgb(0,153,255)_0px_0px_0px_0px_inset,rgb(234,236,240)_0px_0px_0px_1px_inset] ring-0"
            />
          </div>
          <div className="col-span-2 flex">
            <div className="flex w-full flex-col">
              <div className="relative flex h-full self-start">
                <input
                  type="submit"
                  value="Submit"
                  className="h-auto w-full appearance-none rounded-full border-none bg-foreground px-5 py-2 text-background ring-0"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
