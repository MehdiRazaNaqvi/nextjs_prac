
import styles from "./page.module.css";

import Cover from "../../images/cover.png"
import Image from 'next/image'

const AttractionToDo = () => {



  return (


    <div className={styles.attractionToDo}>


      <Image className={styles.attractionToDoChild} src={Cover}></Image>

      <div className={styles.attractionToDoItem} />
      <div className={styles.filters}>
        <div className={styles.ticket21Parent}>
          <img className={styles.ticket21Icon} src={Cover} />
          <b className={styles.ticketsApp}>Tickets App</b>
        </div>
        <div className={styles.locationParent}>
          <div className={styles.location}>
            <b className={styles.schedule}>Schedule</b>
          </div>
          <div className={styles.location1}>
            <b className={styles.eventTypes}>Event Types</b>
            <div className={styles.wrapper}>
              <img className={styles.icon} alt="" src={Cover} />
            </div>
          </div>
          <div className={styles.cta}>
            <b className={styles.schedule}>Add My Event</b>
          </div>
        </div>
      </div>


      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.newYorkDinnerCruiseParent}>
            <b className={styles.newYorkDinner}>New York Dinner Cruise</b>
            <b className={styles.thisEventIncludes}>This event includes</b>
            <div className={styles.includedParent}>
              <div className={styles.included}>
                <b className={styles.schedule}>{`👍🏻 `}</b>
                <div className={styles.directInteractionWith}>
                  Direct interaction with the instructor
                </div>
              </div>
              <div className={styles.included}>
                <b className={styles.schedule}>{`🖥 `}</b>
                <div className={styles.accessOnMobile}>
                  Access on mobile and web
                </div>
              </div>
              <div className={styles.included}>
                <b className={styles.schedule}>{`🎥 `}</b>
                <div className={styles.directInteractionWith}>
                  Session recording after the workshop
                </div>
              </div>
              <div className={styles.included}>
                <b className={styles.schedule}>{`⌛ `}</b>
                <div className={styles.directInteractionWith}>
                  1 hour live session
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutTheEventParent}>
            <b className={styles.aboutTheEvent}>About the Event</b>
            <div className={styles.loremIpsumIsContainer}>
              <p className={styles.loremIpsumIs}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className={styles.loremIpsumIs}>&nbsp;</p>
              <ul className={styles.section11032OfDeFinibus}>
                <li className={styles.section11032Of}>
                  Section 1.10.32 of "de Finibus Bonorum et Malorum",
                </li>
                <li
                  className={styles.section11032Of}
                >{`of Finibus Bonorum et Malorum"de ", `}</li>
                <li>1914 translation by H. Rackham</li>
              </ul>
            </div>
            <div className={styles.location2}>
              <b className={styles.schedule}>Read More</b>
              <div className={styles.wrapper}>
                <img className={styles.icon} src="../../images/cover.png" />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.dontSeeTheAnswerYoureLoParent}>
              <b className={styles.dontSeeThe}>
                Don't see the answer you're looking for? Post Your Question
              </b>
              <div className={styles.yourQuestionMight}>
                Your question might be answered by the host, speakers or
                GoSocial team
              </div>
              <div className={styles.title}>
                <div className={styles.comments}>
                  <div className={styles.group}>
                    <div className={styles.ovalParent}>
                      <img
                        className={styles.ovalIcon}
                        alt=""
                        src="/oval@2x.png"
                      />
                      <div className={styles.amyrobson}>amyrobson</div>
                      <div className={styles.monthAgo}>1 month ago</div>
                    </div>
                    <div className={styles.impressiveThoughI}>
                      Impressive! Though it seems the drag feature could be
                      improved. But overall it looks incredible. You’ve nailed
                      the design and the responsiveness at various breakpoints
                      works really well.
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.ovalParent}>
                      <img
                        className={styles.ovalIcon}
                        alt=""
                        src="/oval1@2x.png"
                      />
                      <div className={styles.amyrobson}>maxblagun</div>
                      <div className={styles.monthAgo}>2 weeks ago</div>
                    </div>
                    <div className={styles.impressiveThoughI}>
                      Woah, your project looks awesome! How long have you been
                      coding for? I’m still new, but think I want to dive into
                      React as well soon. Perhaps you can give me an insight on
                      where I can learn React? Thanks!
                    </div>
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.rectangleCopyParent}>
                      <div className={styles.rectangleCopy} />
                      <div className={styles.addAComment}>
                        Add a comment. Use ‘@’ to tag people
                      </div>
                    </div>
                    <div className={styles.ovalContainer}>
                      <img
                        className={styles.ovalIcon}
                        alt=""
                        src="/oval2@2x.png"
                      />
                      <div className={styles.cta1}>
                        <b className={styles.schedule}>Comment</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.startingFromParent}>
                <div className={styles.startingFrom}>Starting From</div>
                <div className={styles.parent}>
                  <div className={styles.div}>$ 130</div>
                  <div className={styles.div1}>$110.42</div>
                </div>
              </div>
              <div className={styles.startingFromParent}>
                <div className={styles.startingFrom}>Opened</div>
                <div className={styles.mondaySaturdayWrapper}>
                  <b className={styles.mondaySaturday}>Monday - Saturday</b>
                </div>
              </div>
              <div className={styles.startingFromParent}>
                <div className={styles.startingFrom}>Time</div>
                <div className={styles.amParent}>
                  <b className={styles.mondaySaturday}>10:30 am</b>
                  <b className={styles.mondaySaturday}>to</b>
                  <b className={styles.mondaySaturday}>11:30 pm</b>
                </div>
              </div>
              <div className={styles.startingFromParent}>
                <div className={styles.startingFrom}>Duration</div>
                <div className={styles.mondaySaturdayWrapper}>
                  <b className={styles.mondaySaturday}>120 min</b>
                </div>
              </div>
              <div className={styles.startingFromParent}>
                <div className={styles.startingFrom}>Overall Rating</div>
                <div className={styles.parent1}>
                  <img className={styles.icon2} alt="" src="/2.svg" />
                  <b className={styles.mondaySaturday}>4.5</b>
                  <div className={styles.div2}>(230)</div>
                </div>
              </div>
              <div className={styles.locationGroup}>
                <div className={styles.startingFrom}>Location</div>
                <div className={styles.pier61ChelseaPiers111c11Wrapper}>
                  <div className={styles.pier61Chelsea}>
                    Pier 61 Chelsea Piers, 111C 11th Ave, New York, NY 10011,
                    USA
                  </div>
                </div>
              </div>
              <div className={styles.cta2}>
                <b className={styles.schedule}>Buy Tickets</b>
              </div>
            </div>
          </div>
          <div className={styles.banners300x600}>
            <img
              className={styles.shutterstock17120827001Icon}
              alt=""
              src="/shutterstock-1712082700-1@2x.png"
            />
            <img
              className={styles.banners300x600Child}
              alt=""
              src="/rectangle-3.svg"
            />
            <img
              className={styles.banners300x600Item}
              alt=""
              src="/rectangle-4.svg"
            />
            <img
              className={styles.white011Icon}
              alt=""
              src="/white01-1@2x.png"
            />
            <div className={styles.banners300x600Inner} />
            <b className={styles.theBestUniversityContainer}>
              <p className={styles.loremIpsumIs}>Meet Our</p>
              <p className={styles.loremIpsumIs}>Company</p>
            </b>
            <div className={styles.text}>
              <p className={styles.loremIpsumIs}>
                SF Symbols were introduced during WWDC 2019.
              </p>
            </div>
            <div className={styles.groupParent}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild} />
              </div>
              <div className={styles.getItNow}>GET IT NOW</div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.frameParent2}>
        <div className={styles.frameItem} />
        <div className={styles.galleryParent}>
          <b className={styles.aboutTheEvent}>Gallery</b>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameInner}
              alt=""
              src="/rectangle-131@2x.png"
            />
            <div className={styles.rectangleGroup}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-14@2x.png"
              />
              <img
                className={styles.frameChild1}
                alt=""
                src="/rectangle-15@2x.png"
              />
              <img
                className={styles.frameChild2}
                alt=""
                src="/rectangle-16@2x.png"
              />
              <img
                className={styles.frameChild3}
                alt=""
                src="/rectangle-18@2x.png"
              />
              <img
                className={styles.frameChild4}
                alt=""
                src="/rectangle-17@2x.png"
              />
              <b className={styles.b5}>+4</b>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupItem} />
              <div className={styles.frame}>
                <img className={styles.icon3} alt="" src="/3.svg" />
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.groupInner} />
              <div className={styles.wrapper1}>
                <img className={styles.icon3} alt="" src="/4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reviewsParent}>
          <b className={styles.aboutTheEvent}>Reviews</b>
          <div className={styles.rateParent}>
            <div className={styles.rate}>
              <div className={styles.detail}>
                <div className={styles.starParent}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <div className={styles.schedule}>
                    <b>4.8</b>
                    <span className={styles.span}>(123)</span>
                  </div>
                </div>
                <div className={styles.eventDetailRight}>
                  <div className={styles.loremIpsumIs1}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <b className={styles.ahmedAlam}>Ahmed Alam</b>
                </div>
              </div>
            </div>
            <div className={styles.rate}>
              <div className={styles.detail}>
                <div className={styles.starParent}>
                  <img className={styles.starIcon} alt="" src="/star1.svg" />
                  <div className={styles.schedule}>
                    <b>4.8</b>
                    <span className={styles.span}>(123)</span>
                  </div>
                </div>
                <div className={styles.eventDetailRight}>
                  <div className={styles.loremIpsumIs1}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <b className={styles.ahmedAlam}>Ahmed Alam</b>
                </div>
              </div>
            </div>
            <div className={styles.rate}>
              <div className={styles.detail}>
                <div className={styles.starParent}>
                  <img className={styles.starIcon} alt="" src="/star2.svg" />
                  <div className={styles.schedule}>
                    <b>4.8</b>
                    <span className={styles.span}>(123)</span>
                  </div>
                </div>
                <div className={styles.eventDetailRight}>
                  <div className={styles.loremIpsumIs1}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <b className={styles.ahmedAlam}>Ahmed Alam</b>
                </div>
              </div>
            </div>
            <div className={styles.rate}>
              <div className={styles.detail}>
                <div className={styles.starParent}>
                  <img className={styles.starIcon} alt="" src="/star3.svg" />
                  <div className={styles.schedule}>
                    <b>4.8</b>
                    <span className={styles.span}>(123)</span>
                  </div>
                </div>
                <div className={styles.eventDetailRight}>
                  <div className={styles.loremIpsumIs1}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                  <b className={styles.ahmedAlam}>Ahmed Alam</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.dontSeeTheAnswerYoureLoParent}>
            <b className={styles.dontSeeThe}>
              Don't see the answer you're looking for? Post Your Question
            </b>
            <div className={styles.yourQuestionMight}>
              Your question might be answered by the host, speakers or GoSocial
              team
            </div>
            <div className={styles.frameItem} />
            <div className={styles.title}>
              <div className={styles.comments}>
                <div className={styles.group}>
                  <div className={styles.ovalParent}>
                    <img
                      className={styles.ovalIcon}
                      alt=""
                      src="/oval3@2x.png"
                    />
                    <div className={styles.amyrobson}>amyrobson</div>
                    <div className={styles.monthAgo}>1 month ago</div>
                  </div>
                  <div className={styles.impressiveThoughI}>
                    Impressive! Though it seems the drag feature could be
                    improved. But overall it looks incredible. You’ve nailed the
                    design and the responsiveness at various breakpoints works
                    really well.
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.ovalParent}>
                    <img
                      className={styles.ovalIcon}
                      alt=""
                      src="/oval4@2x.png"
                    />
                    <div className={styles.amyrobson}>maxblagun</div>
                    <div className={styles.monthAgo}>2 weeks ago</div>
                  </div>
                  <div className={styles.impressiveThoughI}>
                    Woah, your project looks awesome! How long have you been
                    coding for? I’m still new, but think I want to dive into
                    React as well soon. Perhaps you can give me an insight on
                    where I can learn React? Thanks!
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleCopyParent}>
                    <div className={styles.rectangleCopy} />
                    <div className={styles.addAComment}>
                      Add a comment. Use ‘@’ to tag people
                    </div>
                  </div>
                  <div className={styles.ovalContainer}>
                    <img
                      className={styles.ovalIcon}
                      alt=""
                      src="/oval5@2x.png"
                    />
                    <div className={styles.cta1}>
                      <b className={styles.schedule}>Comment</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.banners970x250}>
        <img
          className={styles.shutterstock17120827001Icon1}
          alt=""
          src="/shutterstock-1712082700-11@2x.png"
        />
        <img
          className={styles.banners970x250Child}
          alt=""
          src="/rectangle-31.svg"
        />
        <img
          className={styles.banners970x250Item}
          alt=""
          src="/rectangle-41.svg"
        />
        <div className={styles.banners970x250Inner} />
        <img className={styles.white011Icon1} alt="" src="/white01-11@2x.png" />
        <div className={styles.groupContainer}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.getItNow}>GET IT NOW</div>
        </div>
        <b className={styles.theBestUniversityContainer1}>
          <p className={styles.loremIpsumIs}>Meet Our</p>
          <p className={styles.loremIpsumIs}>Company</p>
        </b>
        <div className={styles.text1}>
          <p className={styles.loremIpsumIs}>
            SF Symbols were introduced during WWDC 2019.
          </p>
        </div>
      </div>
    </div>


  );
};



export default AttractionToDo;
