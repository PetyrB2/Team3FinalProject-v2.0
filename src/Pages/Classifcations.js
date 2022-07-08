import React from "react";

const Classifcations = () => {
  return (
    <div className="container text-white text-center gt-2 border shadow">
      <h1> British Board of Film Classifcations</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Description</th>
            <th>Guidelines</th>
          </tr>
        </thead>

        {/* UNIVERSAL */}
        <tr>
          <td align="center">
            <img
              src={require("../assets/images/BBFC_U_2019.svg.png")}
              alt="Green triangle with white U in the centre"
              data-file-width="328"
              data-file-height="292"
            />
          </td>

          <td>
            <b>
              <span className="vanchor">
                <span id="Universal"></span>
                <span className="vanchor-text">Universal</span>
              </span>
            </b>
          </td>

          <td>
            Suitable for all. A U film should be suitable for audiences aged
            four years and over.
          </td>

          <td>
            May contain infrequent very mild language. May contain very mild sex
            references and mild violence, if justified by the context.
            <sup id="cite_ref-52" className="reference"></sup>
            <br />
            <p>
              Until 2009, there was also a Uc ("Universal Children")
              certificate, for videos that were particularly suitable for young
              children.
              <sup id="cite_ref-bbfc_history_53-0" className="reference"></sup>
            </p>
          </td>
        </tr>

        {/* PARENTAL GUIDANCE */}
        <tr>
          <td align="center">
            <img
              src={require("../assets/images/70px-BBFC_PG_2019.svg.png")}
              alt="Yellow triangle with PG in the centre"
              data-file-width="328"
              data-file-height="292"
            />
          </td>

          <td>
            <b>
              <span className="vanchor">
                <span id="PG"></span>
                <span className="vanchor-text">
                  Parental
                  <br />
                  Guidance
                </span>
              </span>
            </b>
          </td>

          <td>
            <span className="anchor" id="PG"></span>General viewing, but some
            scenes may be unsuitable for young children. A PG film should not
            unsettle a child aged around eight or older.
          </td>
          <td>
            May contain mild language (frequent/aggressive use may result in the
            work being passed at a higher category) or sex/drug references. May
            contain moderate violence if justified by context (e.g. fantasy).
            Unaccompanied children of any age may watch, but parents are advised
            to consider whether the content may upset younger, or more
            sensitive, children.
          </td>
        </tr>

        {/* TWELVE */}
        <tr>
          <td align="center">
            <img
              src={require("../assets/images/70px-BBFC_12_2019.svg.png")}
              alt="Orange circle with 12 in centre"
              data-file-width="328"
              data-file-height="328"
            />
          </td>
          <td>
            <b>
              <span className="vanchor">
                <span id="12A"></span>
                <span className="vanchor-text">12A</span>
              </span>
            </b>
          </td>
          <td>
            Cinema release suitable for those aged 12 and over. No one younger
            than 12 may see a 12A film in a cinema unless accompanied by an
            adult.
          </td>

          <td>
            May contain adolescent themes, discrimination, soft drugs, moderate
            language, moderate violence, sex references and nudity. Sexual
            activity may be briefly and discreetly portrayed. Use of strong
            language may be permitted based on frequency and how they are used,
            as well as contextual justification. Occasional strong violence may
            be permitted if justified by the context.
            <br />
            <p>
              The 12 category applies to cinema releases from August 1989 to
              2002, and home media since 1994. The 12A category has been used
              for cinema releases since 2002.
            </p>
          </td>
        </tr>

        {/* ORANGE 12 */}
        <tr>
          <td align="center">
            <img
              src={require("../assets/images/70px-BBFC_12A_2019.svg.png")}
              alt="Orange circle with 12 in centre"
              data-file-width="328"
              data-file-height="328"
            />
          </td>
          <td>
            <b>
              <span className="vanchor">
                <span id="12"></span>
                <span className="vanchor-text">12</span>
              </span>
            </b>
          </td>
          <td>
            Video release suitable only for 12 years and over. No one younger
            than 12 may rent or buy a 12 rated video work.
          </td>
          <td>
            May contain adolescent themes, discrimination, soft drugs, moderate
            language, moderate violence, sex references and nudity. Sexual
            activity may be briefly and discreetly portrayed. Use of strong
            language may be permitted based on frequency and how they are used,
            as well as contextual justification. Occasional strong violence may
            be permitted if justified by the context.
            <br />
            <p>
              The 12 category applies to cinema releases from August 1989 to
              2002, and home media since 1994. The 12A category has been used
              for cinema releases since 2002.
            </p>
          </td>
        </tr>

        {/* PINK FIFTEEN */}
        <tr>
          <td align="center">
            <img
              src={require("../assets/images/70px-BBFC_15_2019.svg.png")}
              alt="Pink circle with 15 in centre"
              decoding="async"
              width="70"
              height="70"
              data-file-width="328"
              data-file-height="328"
            />
          </td>
          <td>
            <b>
              <link
                rel="mw-deduplicated-inline-style"
                href="mw-data:TemplateStyles:r1023754711"
              />
              <span className="vanchor">
                <span id="15"></span>
                <span className="vanchor-text">15</span>
              </span>
            </b>
          </td>
          <td>
            Suitable only for 15 years and over. No one younger than 15 may see
            a 15 film in a cinema. No one younger than 15 may rent or buy a 15
            rated video work.
          </td>
          <td>
            May have fairly mature themes. May contain (frequent) strong
            language, strong violence, strong sex references, nudity without
            graphic detail and hard drugs. Sexual activity may be portrayed but
            without any strong detail. Sexual violence may be shown if discreet
            and justified by context. Use of very strong language may be
            permitted based on frequency and how it is used, as well as
            contextual justification.
          </td>
        </tr>

        <tr>
          <td align="center">
            <img
              src={require("../assets/images/70px-BBFC_18_2019.svg.png")}
              alt="Red circle with 18 in centre"
              decoding="async"
              width="70"
              height="70"
              data-file-width="328"
              data-file-height="328"
            />
          </td>
          <td>
            <b>
              <span className="vanchor">
                <span id="18"></span>
                <span className="vanchor-text">18</span>
              </span>
            </b>
          </td>
          <td>
            Suitable only for adults. No one younger than 18 may see an 18 film
            in a cinema. No one younger than 18 may rent or buy an 18 rated
            video work.
          </td>
          <td>
            Films under this category do not have limitation on the foul
            language that is used. Portrayals of illegal drug misuse are
            generally allowed, and explicit sex references along with detailed
            sexual activity are also allowed. Scenes of strong <b>'real sex'</b>{" "}
            may be permitted if justified by the context (Sex works cannot be
            placed at "18"). Very strong, gory, and/or sadistic violence is
            usually permitted. Strong sexual violence is permitted unless it is
            eroticised or excessively graphic, in which a work will require
            compulsory cuts where possible.
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Classifcations;
