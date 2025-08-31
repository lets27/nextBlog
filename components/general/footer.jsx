const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-700 text-white py-10 mt-12 ml-4">
      {/* Copyright */}
      <div className="container mx-auto text-center text-lg font-semibold mb-8">
        © {new Date().getFullYear()} NextBlog. All rights reserved.
      </div>

      {/* Main footer links */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-left text-base max-w-5xl pl-8">
        <div>
          <h3 className="font-bold mb-2 border-b border-gray-300 pb-2">
            LALIGA EA SPORTS
          </h3>
          <ul className="space-y-1">
            <li>Calendar</li>
            <li>Results</li>
            <li>Standings</li>
            <li>Clubs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 border-b border-gray-300 pb-2">
            LALIGA HYPERMOTION
          </h3>
          <ul className="space-y-1">
            <li>Calendar</li>
            <li>Results</li>
            <li>Standings</li>
            <li>Clubs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 border-b border-gray-300 pb-2">
            Liga F Moeve
          </h3>
          <ul className="space-y-1">
            <li>Calendar</li>
            <li>Results</li>
            <li>Standings</li>
            <li>Clubs</li>
          </ul>
        </div>
      </div>

      {/* Other links */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-left text-base max-w-5xl mt-8 pl-8">
        <div>
          <h3 className="font-bold mb-2">Other</h3>
          <ul className="space-y-1">
            <li>Transfers</li>
            <li>Statistics</li>
            <li>Videos</li>
            <li>News</li>
          </ul>
        </div>
      </div>

      {/* Bottom legal / extra links */}
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 mt-10 max-w-5xl text-sm border-t border-gray-700 pt-6">
        <div className="flex flex-wrap gap-6 pl-8">
          <span>Complaints</span>
          <span>Site Map</span>
          <span>Accreditations</span>
          <span>Work with us</span>
          <span>Work with clubs</span>
          <span>Accessibility</span>
          <span>Legal notice</span>
          <span>Privacy Policy</span>
          <span>Cookies Policy</span>
        </div>
        <div className="font-semibold pl-8">&copy; 2025 - LALIGA</div>
      </div>
    </footer>
  );
};

export default Footer;
