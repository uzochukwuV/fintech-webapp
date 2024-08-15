import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Linkedin, LinkedinIcon } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="container-fluid text-sm p-6">
        <div className="flex flex justify-between p-5">
        <div className="sharePage ">
          <ul className="flex gap-6 items-center">
            <li>
              <a
                className="linkIco at300b "
                href="https://www.linkedin.com/company/bain-capital"
                title=""
                data-placement="top"
                data-toggle="tooltip"
                target="_blank"
                rel="nofollow"
                data-original-title="LinkedIn"
              >
                <span className="fa fa-linkedin"> <LinkedinIcon /> </span>
              </a>
            </li>
            <li>
              <a
                className="twtIco at300b "
                href="https://twitter.com/baincapital?lang=en"
                title=""
                data-placement="top"
                data-toggle="tooltip"
                target="_blank"
                rel="nofollow"
                data-original-title="Twitter"
              >
                <span className="fa fa-twitter"><TwitterLogoIcon scale={2} fontSize={50} /> </span>
              </a>
            </li>
          </ul>
        </div>
        <a href="https://www.baincapital.com">
          {/* style="visibility: visible; animation-delay: 0.5s; animation-name: slideInDown;" */}
          <Image
            className="pull-right footer-logo wow slideInDown"
            data-wow-delay="0.5s"
            src="https:/sites/all/themes/baincapital/assets/images/baincapital-outline-blue-Logo.svg"
            alt="Baincapital"
            height={100}
            width={100}
          />
        </a>
        </div>
        <hr className="clearb" />
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-5 md:col-span-4 sm:col-span-12 col-span-12 fullPara">
            <p className="p-4">
              <strong>Stoxafa, LP</strong> is one of the world’s leading
              private investment firms with approximately $185 billion of assets
              under management that creates lasting impact for our investors,
              teams, businesses, and the communities in which we live. Since our
              founding in 1984, we’ve applied our insight and experience to
              organically expand into several asset classNamees including
              private equity, credit, public equity, venture capital and real
              estate. We leverage our shared platform to capture cross-asset
              className opportunities in strategic areas of focus. With offices
              on four continents, our global team aligns our interests with
              those of our investors for lasting impact.{" "}
            </p>
          </div>
          <div className="lg:col-span-7 md:col-span-8 col-sm-12 p-4 col-span-12 footerPadd0">
            <div className="grid grid-cols-4 gap-3 row-links">
              <section className="footer-section-left space-y-3 col-md-15 col-sm-15">
                <h3>
                  <a
                    target=""
                    href="/about-us"
                    rel="noopener noreferrer"
                  >
                    About Us
                  </a>
                </h3>
                <ul className="hidden-xs space-y-3">
                  <li>
                    <a href="https:/about-us#aboutBC">
                      About Stoxafa
                    </a>
                  </li>
                  <li>
                    <a href="/about-us#ourValues">
                      Our Values
                    </a>
                  </li>
                  <li>
                    <a href="/about-us#timeline">
                      Our History
                    </a>
                  </li>
                  <li>
                    <a href="/about-us#countNumber">
                      By the Numbers
                    </a>
                  </li>
                </ul>
              </section>
              <section className="footer-section-right space-y-3 col-md-15 col-sm-15">
                <h3>
                  <a href="/businesses">Businesses</a>
                </h3>
                <ul className="hidden-xs space-y-3">
                  <li>
                    <a
                      target="_blank"
                      href="https://baincapitalprivateequity.com/"
                      rel="noopener noreferrer"
                    >
                      Private Equity
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.baincapitalcredit.com/"
                      rel="noopener noreferrer"
                    >
                      Credit
                    </a>
                  </li>
                  <li>
                    <a href="//baincapitalspecialsituations.com/">
                      Special Situations
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/businesses/ventures/"
                      rel="noopener noreferrer"
                    >
                      Venture
                    </a>
                  </li>
                  <li>
                    <a
                      target=""
                      href="https://www.baincapitalrealestate.com"
                      rel="noopener noreferrer"
                    >
                      Real Estate
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//baincapitaltechopportunities.com"
                      rel="noopener noreferrer"
                    >
                      Tech Opportunities
                    </a>
                  </li>
                  <li>
                    <a
                      target=""
                      href="https://www.baincapitallifesciences.com"
                      rel="noopener noreferrer"
                    >
                      Life Sciences
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.baincapitalpublicequity.com/"
                      rel="noopener noreferrer"
                    >
                      Public Equity
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//www.baincapitalpartnershipstrategies.com"
                      rel="noopener noreferrer"
                    >
                      Partnership Strategies
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.baincapitalinsurance.com/"
                      rel="noopener noreferrer"
                    >
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://baincapitaldoubleimpact.com/"
                      rel="noopener noreferrer"
                    >
                      Double Impact
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/businesses/crypto"
                      rel="noopener noreferrer"
                    >
                      Crypto
                    </a>
                  </li>
                </ul>
              </section>
              <section className="footer-section-left space-y-3 col-md-15 col-sm-15">
                <h3>
                  <a href="/people">People</a>
                </h3>
                <ul className="hidden-xs">
                  <li>
                    <a href="/people">Businesses</a>
                  </li>
                  <li>
                    <a href="/people?dept=38">Corporate</a>
                  </li>
                </ul>
              </section>
              <section className="footer-section-right space-y-3 col-md-15 col-sm-15">
                <h3>
                  <a href="/esgandimpact/">
                    ESG &amp; Impact
                  </a>
                </h3>
                <ul className="hidden-xs"></ul>
              </section>
              <section className="footer-section-left space-y-3 col-md-15 col-sm-15">
                <h3>
                  <a href="/news">Newsroom</a>
                </h3>
              </section>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="row">
            <div className="col-md-12">
              <p>
                {" "}
                © 2012-2024 Stoxafa, LP. The Stoxafa square symbol is
                a trademark of Stoxafa, LP. All Rights Reserved.
                <br />
                <a href="/privacy-policy">
                  Privacy Policy
                </a>
                <a href="/terms-use">Terms of Use</a>
                <a href="/regulatory-disclosures">
                  Regulatory Disclosures
                </a>
                <a href="/fraud-and-cybersecurity-warning">
                  Fraud and Cybersecurity Warning
                </a>
                <noscript>
                  <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-WLFBKSQ4"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                  ></iframe>
                </noscript>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
