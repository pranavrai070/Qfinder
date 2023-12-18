import React from "react";

export default function SideBar() {
  const SideBarData = [
    {
      id: 1,
      heading: "Never enter your real number again!",
      content:
        "Protect your privacy by using one of our disposable virtual phone numbers.",
      logo: "Logo1",
    },
    {
      id: 2,
      heading: "100% anonymous & secure",
      content: "No registration or sign-up required.",
      logo: "Logo2",
    },
    {
      id: 3,
      heading: "Receive SMS Online",
      content:
        "Use our numbers to safeguard your identity and bypass sms verification for Telegram, Tinder, Twitter & much more!",
      logo: "Logo3",
    },
    {
      id: 4,
      heading: "New phone numbers added every month",
      content: "Numbers are updated every 30 days.",
      logo: "Logo4",
    },
  ];

  return(
    <div className="p-4">
    {SideBarData.map((item) => (
      <div key={item.id} className="bg-white rounded-md shadow-md p-4 mb-4">
        <img src={item.logo} alt="Logo" className="w-16 h-16 mb-2" />
        <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
        <p>{item.content}</p>
      </div>
    ))}
  </div>
  );
};

// export default SideBar;
