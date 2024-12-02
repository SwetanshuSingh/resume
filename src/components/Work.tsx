const WorkSection = () => {
  return (
    <section className="w-full flex flex-col gap-6">
      <h4 className="text-xl font-semibold tracking-tight">experience</h4>

      <div className="flex flex-col gap-4">
        <p>
          concertpal.io <span className="text-gray-500">/</span> remote, new
          york <span className="text-gray-500">/</span> september - current
        </p>
        <p>building some extension and working react, idk what else i did</p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          smalltowntalks <span className="text-gray-500">/</span> remote, india{" "}
          <span className="text-gray-500">/</span> april - august 2024
        </p>
        <p>
          i was working as backend eng. here, but i no longer remember what i
          did. i guess i made a scale-able messaging system.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          synthetico.ai <span className="text-gray-500">/</span> jaipur, india{" "}
          <span className="text-gray-500">/</span> november - december 2023
        </p>
        <p>
          did some frontend work here as well, i don't know what should i write
          here.
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
