import React from "react";
import { Text } from "../../atom";
import "./app.css";
import { FaDownload } from "react-icons/fa";
export const SearchDetail = ({ toggled, setToggled }) => {
  return (
    <>
      <div className="detail">
        <div className={toggled === 0 ? "toggle-active" : "toggle1"}>
          <div className="detail-top">
            <Text type="h5" className="detail-h5"></Text>
            <Text className="detail-p"></Text>
          </div>
          <div className="detail-down">
            <div className="detail-scroll">
              <Text className="sc-p"></Text>
            </div>
          </div>
        </div>
        <div className={toggled === 2 ? "toggle-active" : "toggle1"}>
          <div className="detail-top">
            <div className="dt-tp-bk" onClick={() => setToggled(null)}>
              ⟵
            </div>
            <Text type="h5" className="detail-h5">
              Coronation Speech
            </Text>
            <Text className="detail-p">2021-08-21 18:59:07</Text>
          </div>
          <div className="detail-down">
            <div className="detail-scroll">
              <Text className="sc-p">
                <div class="sc-e">
                  <p>
                    In the name of the most High God, we warmly welcome you all
                    to this distinctly notable day in the annals of our rich
                    heritage and noble ancestry as proud inheritors of the
                    unique essence that has come to define our Iwere Kingdom.
                  </p>

                  <p class="mt-3">
                    We would like to especially welcome His Excellency,
                    President Muhammadu Buhari, who is here represented by the
                    Deputy Senate President. We recognise the distinguished
                    presence of the Governor of Kebbi State, the representative
                    of the Governor of Delta State and other traditional rulers
                    present.
                  </p>
                  <p class="mt-3">
                    Your Excellencies, Distinguished Ladies and Gentlemen,
                    before proceeding any further, we would like to thank
                    Almighty God for the life and glorious reign of our
                    predecessor, and most illustrious uncle, His Majesty, Ogiame
                    Ikenwoli. In the course of his relatively brief reign, he
                    was whole-heartedly committed to the cause of the sustained
                    peace, growth and development of Iwere Kingdom. His place of
                    pride is definitely assured in the pantheon of Itsekiri
                    monarchs and in the hearts and minds of all Itsekiri sons
                    and daughters. May he continue to rest with the Lord.
                  </p>
                  <p class="mt-3">
                    Fellow Itsekiri, Distinguished Ladies and Gentlemen, we are
                    confident that our ancestors are at this moment, smiling
                    down on us filled with pride and joy as they see us ready
                    and braced for the journey towards repositioning our dear
                    Iwere Kingdom within the prevailing reality of today’s
                    Nigeria and the world at large.
                  </p>
                  <p class="mt-3">
                    It is our prayer that, in the end, we will be true worthy
                    inheritors of their great sacrifice and faith in a strong,
                    progressive united Iwere Kingdom.
                  </p>
                  <p class="mt-3">
                    We must express our profound gratitude to the proud Itsekiri
                    sons and daughters who stood up to be counted when it
                    appeared that the foundation of our collective patrimony was
                    under threat. While it is not expedient to mention them all
                    on this occasion, Chief Johnson, Chief Gabriel Awala, Chief
                    Brown Mene, Chief Roland Oritsejafor, Chief C. D. Ikomi,
                    Chief Edwin Olley, Chief Robinson Ariyo and Chief Eugene
                    Ikomi need to be specially recognized. Modokpe gidigbo.
                  </p>
                  <p class="mt-3">
                    Interestingly, just before this very precious kairos moment
                    in time which has brought us to where we are today, that age
                    long tendency that has always sought to distort and abort
                    our greatness, wanted to rear its ugly head in an attempt to
                    truncate our glory and restoration to our original God given
                    identity.
                  </p>
                  <p class="mt-3">
                    Our kingdom has experienced an unfortunate interregnum in
                    our history that lasted for 88 years. But because the
                    Almighty God had reserved the importance that Itsekiri would
                    be, to the formation and greatness of what would be a
                    successful Nigeria, a force beyond all human reckoning and
                    comprehension, did the impossible, and brought back this
                    exalted throne and with it, a King, Olu Ginuwa II, to be
                    witness to the beginning of the process of what would be an
                    independent Nigeria.
                  </p>
                  <p class="mt-3">
                    This time however, God did not just intervene to truncate
                    any disruptive plots, He ensured that the Itsekiri nation
                    stood united, and all of Nigeria rallied behind Itsekiri to
                    ensure that there was no division.
                  </p>
                  <p class="mt-3">
                    We aver before you all today that we are not and were never
                    offended at any point in time during the process that
                    culminated in this day that has seen me ascend to the throne
                    of my fathers.
                  </p>
                  <p class="mt-3">
                    This is, in every ramification, a very special day; one that
                    had been predestined and divinely ordained by the Most High
                    God. He, and He alone could have determined that three
                    months after our Idaniken began in May, our coronation will
                    take place today, the only Saturday in this year 2021 that
                    occurs as the 21st day of the month!
                  </p>
                  <p class="mt-3">
                    Distinguished Ladies and Gentlemen, this unique August day
                    is truly a day of the Almighty God’s divine visitation to
                    Iwere Kingdom! It is not just a divine visitation, it
                    heralds a divine habitation!
                  </p>
                  <p class="mt-3">
                    There is no part of this that has been of my own doing, it
                    was and remains God’s divine project. And as a result, the
                    mischief that some had intended, God has used it for good.
                    Our Yoruba brothers have an expression: when the palace of
                    the King burns down, it is because a more beautiful one
                    wants to be erected in its place. The taboo that was done by
                    the desecration of our most prized Crown Jewels, made a way
                    for a more beautiful one, fashioned by our own royal person,
                    while staying true to the inspiration of the one that came
                    from Portugal way back in the 17th Century.
                  </p>
                  <p class="mt-3">
                    Before then, however, Olu Ginuwa I brought a coral beaded
                    crown from the source in Benin, and that crown adorned the
                    heads of the first 6 Olus. Olu Atuwatse I brought a pair of
                    silver crowns that would adorn the heads of the next 14
                    Olus. By the special grace of God, we have the privilege to
                    introduce a new pair of gold and silver crowns, to the
                    already rich and beautiful history of the attire of the Olu
                    of Warri. And as the progression of our crowns is symbolic
                    for all to see, from coral, to silver, and now to gold, so
                    shall there be a spiritual, physical, social and economic
                    manifestation of the progress of our kingdom and our people.
                  </p>
                  <p class="mt-3">
                    While not seeking to reopen old wounds, it is pertinent to
                    recall the fact that, following the grave injustice meted
                    out to Olu Erejuwa II, he visited His Royal Majesty Oba
                    Akenzua II of Benin and recounted his ordeal. In reaction, a
                    curse was placed on the land by both of them.
                  </p>
                  <p class="mt-3">
                    It is not recorded that Olu Erejuwa II reversed the curse
                    over the land. Neither is it recorded that Oba Akenzua II
                    did same. Most probably, the issue was never revisited. As a
                    firm believer in the intricate interconnectedness between
                    the spiritual and the manifestation in the physical, it is
                    our firm belief that the matter needs to be addressed.
                  </p>
                  <p class="mt-3">
                    Today, in our capacity as Olu, we hereby avow: As the
                    spiritual, cultural, political and traditional leader of
                    this land, I, Ogiame Atuwatse III, the 21st Olu of Warri,
                    the first son of Olu Atuwatse II, the grandson and direct
                    descendant of Olu Erejuwa II, who was offended on this
                    throne, Ihereby reverse the curse placed over this land. In
                    its place, I release forgiveness and healing to the Federal
                    Government of Nigeria, whose might was used to propagate
                    that offence, and I decree unprecedented and uncommon peace,
                    prosperity, progress, and development upon this land. I
                    bring down the government of heaven unto this land, and
                    direct it to flow as a force that can neither be sabotaged,
                    slowed nor stopped. It goes out as a strong ripple effect,
                    emanating from this kingdom to the rest of the Niger Delta,
                    to the rest of the Nigerian Nation, and even the African
                    continent.{" "}
                  </p>
                  <p class="mt-3">
                    Africa has always been shaped as a gun, with Nigeria as its
                    trigger. Today, that gun has been fired, and full
                    restoration comes out of the barrel. This land begins to
                    yield its riches to us, all that had been hidden hitherto,
                    comes to the surface, and the world shall marvel as to how
                    we have defied projected economic trends. And this time
                    around, we shall be the ones to chart the course of our own
                    destiny.
                  </p>
                  <p class="mt-3">
                    And now, as Itsekiri is restored to its original identity as
                    one of blessing, we decree: because Itsekiri is blessed,
                    Nigeria is blessed. Because Itsekiri is blessed, Africa is
                    blessed.
                  </p>
                  <p class="mt-3">
                    Now that the foundation has been addressed, it is time to
                    put out a clarion call. We therefore call upon and welcome
                    back, all sons and daughters of Iwere Kingdom that are
                    dispersed in the diaspora; in Nigeria, the rest of Africa
                    and all over the world. All sons and daughters of Iwere
                    Kingdom who identify as Itsekiri, by your father, your
                    mother, grandmother or grandfather, we welcome you and all.
                    Come with your capacity, your expertise, your networks, your
                    ideas and resources, to join us in repositioning this
                    Kingdom. We also invite, our well-wishers and admirers, who
                    count it all joy to be identified and associated with us,
                    either by marriage, business ties or residence.{" "}
                  </p>
                  <p class="mt-3">
                    We extend specially towards our neighbours, our Ijaw, Urhobo
                    and Ilaje neighbours, a hand of invitation to peace and
                    development. As it is not our desire to prosper in
                    isolation, we desire that our neighbours prosper also. We
                    recognise that the peace and prosperity is a shared one,
                    built on righteousness and justice, which is the motto of
                    this our reign, and the foundation upon which God’s throne
                    is built.
                  </p>
                  <p class="mt-3">
                    At this point, we make bold to say, that our emergence is
                    not simply the filling of a role. We will be redefining the
                    essence of the throne of the Olu of Warri. While we have
                    every intention to lead as led by The Lord Himself, we
                    implore all of us to work together, and renew our minds and
                    our way of thinking, so that nothing, especially internally,
                    hinders us from getting to our desired glorious destination.
                    We should be ready to let go of the old ways that have not
                    encouraged us to advance, and not allow sentiment to keep us
                    bound.
                  </p>
                  <p class="mt-3">
                    To launch this new renaissance today, you would have noticed
                    the crests that have been released. We have taken time,
                    based on the information available, to rebrand our forebears
                    in such a way that they define their own unique identity,
                    reign, and destiny. As a people so proud of their royal
                    heritage, it is our expectation that in these 20 crests we
                    will be able to further add to the pride and richness of our
                    historical and cultural identity.
                  </p>
                  <p class="mt-3">
                    At this juncture, I want to speak directly to the youths of
                    not just Iwere Kingdom, but the entire Niger Delta. We have
                    heard the narrative several times, as to how blessed the
                    Niger Delta is blessed in terms of resources. The truth
                    however, we must look beyond oil and gas, and channel our
                    energy in the right directions towards endeavours that will
                    result in added value across the board. What we have, is our
                    culture and our identity, and we must use this as an
                    instrument to influence the mind of our youth for their own
                    development, in ways that are completely devoid of partisan
                    politics.
                  </p>
                  <p class="mt-3">
                    We will look to honour our women. We will encourage them,
                    build them up and support them in realising their
                    inestimable potentials. And as we do this, we will also see
                    the multiplier effect in the collective development of our
                    people. We will ensure that our women, both old and young,
                    are honoured and respected, not only by word, but in actual
                    cultural practice. We will look to actively seek the opinion
                    and counsel of our women, and opportunities that avail
                    themselves to the Itsekiri nation will be used to empower
                    our women to enable them to contribute their substance to
                    the growth and development of the Itsekiri nation. So I say
                    to our women today: You will no longer be invisible.
                  </p>
                  <p class="mt-3">
                    I want to begin by formally honouring the two most important
                    women in my life today. Interestingly enough, as God has
                    ordained, one is a beautiful young lady of Edo heritage, and
                    the other, is a gracious woman of Yoruba heritage. One
                    addresses the past, while the other addresses the present as
                    well as the future. But as we have come to understand, time
                    is a river, things are intertwined. Just like the
                    complicated fabric that is the Itsekiri nation.{" "}
                  </p>
                  <p class="mt-3">
                    By the special grace of God, I am the first Olu of Warri, in
                    well over two centuries, whose mother is alive and well to
                    witness him sit on the throne. In the same time span, even
                    longer, I am the first eldest son of an Olu to ascend the
                    throne. None of these are taken for granted, it is the
                    perfect will and purpose of the Almighty God to make it so.{" "}
                  </p>
                  <p class="mt-3">
                    Where we have unofficially addressed the mother of the Olu
                    as Iy’olu, simply because she happened to be his mother, I
                    hereby officially and formally, bestow the honour on my
                    mother. You shall no longer be referred to as Olori Atuwatse
                    II, but Iyiolu Atuwatse III. And blessed are you among
                    mothers in the earth.
                  </p>
                  <p class="mt-3">
                    Inevitably, in addressing the present and the future, we
                    cannot but consider where we are coming from. Since the
                    arrival of Prince Ginuwa from Benin, it is not on record
                    that any Olu has married a Bini woman, nor has any Olu been
                    on record to have been born of a Bini woman. I distinguish
                    between Bini and Edo, for obvious reasons. Yet again, I
                    stand before you, as the first Olu in five centuries, to be
                    married to a Bini woman. In many ways, it is as though
                    today, this monarchy has come full circle.{" "}
                  </p>
                  <p class="mt-3">
                    And on this note, let me share a personal story of my
                    recently departed father-in-law - Captain Idahosa Okunbo. He
                    was witness to a prophetic word, and he himself, unbeknownst
                    to him, played the role of a prophet. Raised by his
                    grandmother in his much younger years, she would say out
                    loud after a long tedious day, “the suffering is too much;
                    in my next life, I will come back and be inside the Palace”.
                    On the day we paid the bride price in Benin, my
                    father-in-law said to me as he finally placed his daughter
                    into my hands, “I named her, Aiyivieruewinoya (roughly
                    translated as ‘you don’t abuse precious beads’). Ivie
                    belongs to the Palace, and I am entrusting her into your
                    palace”. The words of his grandmother and indeed his own
                    words, were inspired and honoured by heaven, and today, the
                    full manifestation has come to pass.
                  </p>
                  <p class="mt-3">
                    To my beautiful, loving and supportive wife, I hereby
                    officially and formally bestow the honour upon you. You
                    shall no longer be referred to as Princess Ivie Emiko, but
                    as Olori Atuwatse III. Long may we both reign.{" "}
                  </p>
                  <p class="mt-3">
                    As glorious as today is, our future is even more glorious,
                    because we have the blessing and backing of the Almighty
                    God. And with this backing comes boundaries. Whatever
                    knowledge, in form of our centuries-old heritage, or
                    whatever resource, in form of our abundant natural and
                    mineral wealth, that God has given us, we will neither boast
                    in nor depend on them. Rather, we will depend on God
                    Himself, who has given us these things. And it is in doing
                    what God says to us, how we follow His instructions, that we
                    will move mightily in dominion, power and authority. And
                    upon this revelation, shall be the bedrock and cornerstone
                    of our reign:
                  </p>
                  <p class="mt-3">The earth belongs to God</p>
                  <p>This throne belongs to God </p>
                  <p>This king belongs to God</p>

                  <p class="mt-3">
                    And so, we boldly declare, that the Kingdom of Warri has
                    become the Kingdom of our Lord and of his Christ. And He
                    shall reign forever and ever.
                  </p>
                  <p class="mt-3">
                    I thank you all for coming to celebrate with us this day.
                    And wish you Godspeed as you return to your various
                    destinations. God bless Iwere land, God bless all our
                    neighbours, God bless Delta state, God bless Nigeria, and
                    God bless Africa.
                  </p>
                  <a
                    href="The Warri.pdf"
                    download="The Warri.pdf"
                    className="dwn-a"
                  >
                    <div className="download">
                      <span>Download speech as PDF</span>
                      <FaDownload />
                    </div>
                  </a>
                </div>
              </Text>
            </div>
          </div>
        </div>

        <div className={toggled === 1 ? "toggle-active" : "toggle2"}>
          <div className="detail-top ">
            <div className="dt-tp-bk" onClick={() => setToggled(null)}>
              ⟵
            </div>
            <Text type="h5" className="detail-h5">
              A New Dawn (Keynote Speech at the PIA Summit)
            </Text>
            <Text className="detail-p">2022-05-26 23:42:59</Text>
          </div>
          <div className="detail-down">
            <div className="detail-scroll">
              <Text className="sc-p">
                The image you see of the iceberg of the African Continent, is
                one of the most powerful images we have ever come across. The
                tip of the icerberg, represents the last 60 years of terrible
                wastage and mismanagement. But the good thing is, the real
                blessing, the real wealth, is now about to become manifest. We
                may have heard the famous joke: when God was creating Africa,
                but specifically Nigeria, he overloaded the abundance of all
                sorts of blessings. The Angels and other heavenly beings
                exclaimed, Why did you bless them so? Its not fair to the other
                countries of the world! To which God said, wait till you see the
                leaders they will have. Like that image of the tip of the
                iceberg and all it represents, God has created a new crop of
                leaders for our people, and with new opportunities that come
                along with it. The 2021 Petroleum Industry Act is one of such
                opportunities, and a very crucial chapter in stewarding our
                commonwealth; in terms of community entitlements that derive
                from the development of oil and gas operations in Iwereland. The
                PIA is essentially an instrument, designed to cure the appetites
                of individuals who have become used to appropriating the
                commonwealth to themselves or mismanaging the wealth to the
                detriment of the destiny of the people. This is an engagement to
                promote awareness and enjoin the people, to participate actively
                and wisely in choosing their representation in the activation of
                this all important act. The primary purpose of the PIA is to
                assist in any developmental purpose, deemed beneficial to the
                host communities, as may be determined by the Board of Trustees;
                members of the Boards must invest part of the available funds
                for and on behalf of the host communities. This crucial role
                demands an equilibrium of High Performance and Trustworthiness,
                as the parameters for effective operational excellence of the
                Boards. As a Natural leader, we must speak the truth and set the
                right foundations as we move to rebuild with this new
                opportunity. Many seemingly justifiable factors have led to us
                holding on to counterproductive sentiments. It is time to heal
                and move on from this self limiting and self destructive holding
                pattern. We must shift our focus to competence as the imperative
                requirement, in running the governance of the assets and
                instruments that the communities invest in. A study of the Act
                reveals, that it proposes to advance and propagate educational
                development, for the benefit of members of the host communities
                within the scope of funds available to the Board of Trustees for
                such purposes. This is where we look to incorporate our global
                development master plan. This plan shall be characterised by
                bold transparency, and international best practices in our
                community development initiatives, to which we invite the
                collaboration of our partners. The master plan will also include
                issues of tenure and governance, and provide the matrixes for
                contracting processes, and standards for operations of the trust
                fund, to the host communities in consonance with the Act. By
                making inclusion total, we shall rally our Iwereland diaspora
                sons and daughters to the plan, by employing the vehicles of a
                global roadshow, designed to guide them to remit talent and
                finance back home to invest. It requires saviness in economics,
                finance and management to achieve this goal. With this and other
                merit based criteria, we will find that convergence of
                competence and integrity of character to make Iwereland
                flourish. The driving spirit and recurring theme of the PIA, is
                inclusion and the support of local initiatives for the security
                of the host communities. As a result, each one has equal access
                to not only opportunities, but resources, as would otherwise
                have been the case where some are marginalised or outrightly
                excluded from the wealth that belongs to us all. We intend that
                The Iwereland Global Masterplan will be so well put together,
                that all arms of government and intervention agencies become
                fully committed to being a part of that plan. We will discourage
                idleness and a sense of entitlement, while encouraging
                competence and all that brings added value to the effort. We
                assure government, companies, non-governmental organisations and
                regulatory authorities, that we are well aware that our job is
                to make Iwereland more hospitable for business - whether Energy
                or otherwise - no matter the obstacles thrown our way. To those
                from our Host Communities represented here, you are our first
                line of defence. We direct that each of you here present,
                appreciate that you are here in representation of your larger
                communal family, who expect that you must not confuse
                representation for appropriation. This is what makes you a
                leader. And it is in your execution of this responsibility, we
                direct that you take the deliberations here today, back to your
                communities, and interpret the import and implications of these
                deliberations to your family, in the language they understand.
                The crown will acknowledge and reward you. You will see that the
                overriding and recurring theme of the PIA is trust. This virtue
                is the beginning, and end, of what this gathering today is
                about. Enlightened self-interests is the antidote to
                selfishness, and is the checkmate to mutually assured
                destruction, that was our definite destination until the passing
                of the PIA. As a message to our partners, the Crown, on behalf
                of the chiefs, the Host Community Development Trusts, and their
                elected board of trustees, would like to inform our guests that
                we, the Itsekiris, do not abandon our own. We are here to heal
                our people, to unite our people, to empower our people, to build
                our people. Without a doubt, God has elevated us for a time such
                as this, and the same God that elevated us, has equipped us with
                the wherewithal, to deliver the set expectation of the people.
                And so, we set the tone and the pace, for reopening Iwereland
                for business and development. To the Iwere people, we pronounce
                that self-centredness in our land ends today. Singleness of
                vision and mission arises in its stead. The land is alive, and I
                proclaim over it today: The Soil of Iwereland is blessed. The
                sea around Iwereland is blessed. The Sky above Iwereland is
                blessed. The hearts and minds of the people of Iwere, is renewed
                this day, and all is in perfect alignment, for this course of
                growth and development, we have set upon today. Thank you and
                God bless you.
              </Text>
              <a
                href="corronation.pdf"
                download="corronation.pdf"
                className="dwn-a"
              >
                <div className="download">
                  <span>Download speech as PDF</span>
                  <FaDownload />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//index will display the details
//
