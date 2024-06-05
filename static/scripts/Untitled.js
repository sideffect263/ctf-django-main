var storyContent = ﻿{"inkVersion":20,"root":[[{"->":"murder_scene"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"pop":[{"temp=":"list"},"ev",{"VAR?":"list"},"LIST_MIN","/ev",{"temp=":"x"},"\n","ev",{"VAR?":"list"},{"VAR?":"x"},"-",{"temp=":"list","re":true},"/ev","ev",{"VAR?":"x"},"/ev","~ret",{"#f":1}],"get":[{"temp=":"x"},"ev",{"VAR?":"Inventory"},{"VAR?":"x"},"+",{"VAR=":"Inventory","re":true},"/ev",{"#f":1}],"move_to_supporter":[{"temp=":"new_supporter"},{"temp=":"item_state"},"ev",{"VAR?":"item_state"},{"VAR?":"Supporters"},"LIST_ALL","-",{"temp=":"item_state","re":true},"/ev","\n","ev",{"VAR?":"item_state"},{"VAR?":"new_supporter"},"+",{"temp=":"item_state","re":true},"/ev",{"#f":1}],"reached":[{"temp=":"x"},"ev",{"VAR?":"knowledgeState"},{"VAR?":"x"},"?","/ev","~ret",{"#f":1}],"between":[{"temp=":"y"},{"temp=":"x"},"ev",{"VAR?":"knowledgeState"},{"VAR?":"x"},"?",{"VAR?":"knowledgeState"},{"VAR?":"y"},"L^","!","&&","/ev","~ret",{"#f":1}],"reach":[{"temp=":"statesToSet"},"ev",{"^var":"statesToSet","ci":-1},{"f()":"pop"},"/ev",{"temp=":"x"},"\n",["ev",{"VAR?":"x"},"!","/ev",{"->":".^.b","c":true},{"b":["\n","ev",false,"/ev","~ret",{"->":"reach.10"},null]}],["ev",{"VAR?":"x"},{"f()":"reached"},"!","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"x"},"LIST_ALL","/ev",{"temp=":"chain"},"\n","ev",{"VAR?":"chain"},{"VAR?":"chain"},"LIST_MIN",{"VAR?":"x"},"range","/ev",{"temp=":"statesGained"},"\n","ev",{"VAR?":"knowledgeState"},{"VAR?":"statesGained"},"+",{"VAR=":"knowledgeState","re":true},"/ev","ev",{"VAR?":"statesToSet"},{"f()":"reach"},"pop","/ev","\n","ev",true,"/ev","~ret",{"->":"reach.10"},null]}],[{"->":".^.b"},{"b":["\n","ev",false,{"VAR?":"statesToSet"},{"f()":"reach"},"||","/ev","~ret","\n",{"->":"reach.10"},null]}],"nop","\n",{"#f":1}],"murder_scene":[["^The bedroom. This is where it happened. Now to look for clues.","\n",["ev",{"VAR?":"bedroomLightState"},{"VAR?":"seen"},"?","/ev",[{"->":".^.b","c":true},{"b":["^ ","thread",{"->":".^.^.^.^.^.seen_light"},{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"^->":"murder_scene.0.top"},"/ev","thread",{"->":".^.^.^.compare_prints"},"ev","str","^The bed...","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^ Look under the bed ","/str",{"CNT?":".^.c-0.9.bedhub.c-6"},{"VAR?":"bedroomLightState"},{"VAR?":"on_floor"},"?","&&",{"VAR?":"bedroomLightState"},{"VAR?":"on"},"?","&&","/ev",{"*":".^.c-1","flg":21},"ev","str","^Use the cane to reach under the bed ","/str",{"CNT?":".^.c-1.3.reaching"},{"^->":"murder_scene.0.top.c-1.3.reaching"},"turns",4,">=","&&",{"VAR?":"Inventory"},{"VAR?":"cane"},"?","&&","/ev",{"*":".^.c-2","flg":21},"ev","str","^Pick up the knife","/str",{"VAR?":"knifeState"},{"VAR?":"on_floor"},"?","/ev",{"*":".^.c-3","flg":21},"ev","str","^Look at the knife","/str",{"VAR?":"Inventory"},{"VAR?":"knife"},"?","/ev",{"*":".^.c-4","flg":21},"ev","str","^   The desk... ","/str","/ev",{"*":".^.c-5","flg":20},"ev","str","^Swoosh the cane","/str",{"VAR?":"Inventory"},{"VAR?":"cane"},"?",{"^->":"murder_scene.0.top.c-5.13.deskstate"},"turns",2,"<=","&&","/ev",{"*":".^.c-6","flg":21},"ev","str","^The window...","/str","/ev",{"*":".^.c-7","flg":20},"ev","str","^Leave the room","/str",{"CNT?":".^"},5,">=","/ev",{"*":".^.c-8","flg":21},{"c-0":["\n","^The bed was low to the ground, but not so low something might not roll underneath. It was still neatly made.","\n","ev",{"VAR?":"neatly_made"},{"f()":"reach"},"pop","/ev","\n",[["ev","str","^Lift the bedcover","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Remove the cover","/str",{"VAR?":"crumpled_duvet"},{"f()":"reached"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^open the ctf with the secret code in it","/str",{"VAR?":"Inventory"},{"VAR?":"ctf_code"},"?","/ev",{"*":".^.c-2","flg":21},"ev","str","^ Pull back the duvet ","/str",{"VAR?":"BedState"},{"VAR?":"covers_off"},"==","/ev",{"*":".^.c-3","flg":21},"ev","str","^ Remake the bed ","/str",{"VAR?":"BedState"},{"VAR?":"made_up"},"!?","/ev",{"*":".^.c-4","flg":21},"ev","str","^Test the bed","/str","/ev",{"*":".^.c-5","flg":20},"ev","str","^Look under the bed","/str","/ev",{"*":".^.c-6","flg":20},"ev","str","^Something else?","/str",{"^->":"murder_scene.0.top.c-0"},"turns",1,">","/ev",{"*":".^.c-7","flg":21},{"c-0":["\n","^I lifted back the bedcover. The duvet underneath was crumpled.","\n","ev",{"VAR?":"crumpled_duvet"},{"f()":"reach"},"pop","/ev","\n","ev",{"VAR?":"covers_shifted"},"/ev",{"VAR=":"BedState","re":true},{"->":".^.^.^.g-0"},{"#f":5}],"c-1":["\n","^Careful not to disturb anything beneath, I removed the cover entirely. The duvet below was rumpled.","\n","^Not the work of the maid, who was conscientious to a point. Clearly this had been thrown on in a hurry.","\n","ev",{"VAR?":"hastily_remade"},{"f()":"reach"},"pop","/ev","\n","ev",{"VAR?":"covers_off"},"/ev",{"VAR=":"BedState","re":true},{"->":".^.^.^.g-0"},{"#f":5}],"c-2":["\n",[["ev",{"^->":"murder_scene.0.top.c-0.9.bedhub.c-2.1.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"bedroomLightState"},{"VAR?":"off"},"?","/ev",{"*":".^.^.c-0","flg":19},{"s":["^maybe turn on the lamp so you can read",{"->":"$r","var":true},null]}],["ev",{"^->":"murder_scene.0.top.c-0.9.bedhub.c-2.1.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"bedroomLightState"},{"VAR?":"on"},"?","/ev",{"*":".^.^.c-1","flg":19},{"s":["^the ctf code is ctf:7e32a729b1226ed1",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"murder_scene.0.top.c-0.9.bedhub.c-2.1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"murder_scene.0.top.c-0.9.bedhub.c-2.1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","end",{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-3":["\n","^I pulled back the duvet. Beneath it was a sheet, sticky with blood.","\n","ev",{"VAR?":"bloodstain_visible"},"/ev",{"VAR=":"BedState","re":true},"ev",{"VAR?":"body_on_bed"},{"f()":"reach"},"pop","/ev","\n","^Either the body had been moved here before being dragged to the floor - or this is was where the murder had taken place.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-4":["\n","^Carefully, I pulled the bedsheets back into place, trying to make it seem undisturbed.","\n","ev",{"VAR?":"made_up"},"/ev",{"VAR=":"BedState","re":true},{"->":".^.^.^.g-0"},{"#f":5}],"c-5":["\n","^I pushed the bed with spread fingers. It creaked a little, but not so much as to be obnoxious.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-6":["\n","^Lying down, I peered under the bed, but could make nothing out.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-7":["\n","^I took a step back from the bed and looked around.","\n",{"->":".^.^.^.^.^"},{"->":".^.^.^.g-0"},{"#f":5}],"#f":5,"#n":"bedhub"}],{"g-0":[{"->":".^.^.bedhub"},{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":7}],"c-1":["\n","^I peered under the bed. Something glinted back at me.","\n",[["ev","str","^ Reach for it ","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Knock it with the cane","/str",{"VAR?":"Inventory"},{"VAR?":"cane"},"?","/ev",{"*":".^.c-1","flg":21},"ev","str","^ Stand up ","/str",{"CNT?":".^"},1,">","/ev",{"*":".^.c-2","flg":21},{"c-0":["\n","^I fished with one arm under the bed, but whatever it was, it had been kicked far enough back that I couldn't get my fingers on it.","\n",{"->":".^.^"},{"->":".^.^.^.^.^.^.g-0"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.^.c-2"},{"->":".^.^.^.^.^.^.g-0"},{"#f":5}],"c-2":["\n","^I stood up once more, and brushed my coat down.","\n",{"->":".^.^.^.^.^"},{"->":".^.^.^.^.^.^.g-0"},{"#f":5}],"#f":7,"#n":"reaching"}],null],{"#f":5}],"c-2":["\n","^Positioning the cane above the carpet, I gave the glinting thing a sharp tap. It slid out from the under the foot of the bed.","\n","ev",{"^var":"knifeState","ci":-1},{"VAR?":"on_floor"},{"f()":"move_to_supporter"},"pop","/ev","\n",["ev","str","^Stand up","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Look under the bed once more","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^Satisfied, I stood up, and saw I had knocked free a bloodied knife.","\n",{"->":".^.^.^.^"},{"->":".^.^.^.^.^.g-0"},{"#f":5}],"c-1":["\n","^Moving the cane aside, I looked under the bed once more, but there was nothing more there.","\n",{"->":".^.^.c-0"},{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-3":["\n","^Careful not to touch the handle, I lifted the blade from the carpet.","\n","ev",{"VAR?":"knife"},{"f()":"get"},"pop","/ev","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-4":["\n","^The blood was dry enough. Dry enough to show up partial prints on the hilt!","\n","ev",{"VAR?":"prints_on_knife"},{"f()":"reach"},"pop","/ev","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-5":["\n","^I turned my attention to the desk. A lamp sat in one corner, a neat, empty in-tray in the other. There was nothing else out.","\n","^Leaning against the desk was a wooden cane.","\n","^on my desk the my laptop was flashing","\n","ev",{"VAR?":"bedroomLightState"},{"VAR?":"seen"},"+",{"VAR=":"bedroomLightState","re":true},"/ev",[["ev","str","^Pick up the cane ","/str",{"VAR?":"Inventory"},{"VAR?":"cane"},"!?","/ev",{"*":".^.c-0","flg":21},"ev","str","^Turn on the lamp","/str",{"VAR?":"bedroomLightState"},{"VAR?":"on"},"!?","/ev",{"*":".^.c-1","flg":21},"ev","str","^Look at the in-tray ","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^grab the note that there is a word written on it that starts with ctf:","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Open a drawer","/str",{"CNT?":".^.c-4"},3,"<","/ev",{"*":".^.c-4","flg":5},"ev","str","^Something else?","/str",{"CNT?":".^"},2,">=","/ev",{"*":".^.c-5","flg":21},{"c-0":["\n","ev",{"VAR?":"cane"},{"f()":"get"},"pop","/ev","\n","^I picked up the wooden cane. It was heavy, and unmarked.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-1":["\n",{"->t->":"murder_scene.operate_lamp"},{"->":".^.^.^.g-0"},{"#f":5}],"c-2":["\n","^I regarded the in-tray, but there was nothing to be seen. Either the victim's papers were taken, or his line of work had seriously dried up. Or the in-tray was all for show.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-3":["\n","^ok I have the note with me gotta output it in a safe place","\n","ev",{"VAR?":"ctf_code"},{"f()":"get"},"pop","/ev","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-4":["\n","^I tried ",["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^a drawer at random",{"->":".^.^.23"},null],"s1":["pop","^another drawer",{"->":".^.^.23"},null],"s2":["pop","^a third drawer",{"->":".^.^.23"},null],"#f":5}],"^. ",["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Locked",{"->":".^.^.23"},null],"s1":["pop","^Also locked",{"->":".^.^.23"},null],"s2":["pop","^Unsurprisingly, locked as well",{"->":".^.^.23"},null],"#f":5}],"^.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-5":["\n","^I took a step away from the desk once more.","\n",{"->":".^.^.^.^.^"},{"->":".^.^.^.g-0"},{"#f":5}],"#f":7,"#n":"deskstate"}],{"g-0":[{"->":".^.^.deskstate"},{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-6":["\n","^I was still holding the cane: I gave it an experimental swoosh. It was heavy indeed, though not heavy enough to be used as a bludgeon.","\n","^But it might have been useful in self-defence. Why hadn't the victim reached for it? Knocked it over?","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-7":["\n","^I went over to the window and peered out. A dismal view of the little brook that ran down beside the house.","\n",[["ev",{"^->":"murder_scene.0.top.c-7.3.window_opts"},"/ev","thread",{"->":"murder_scene.compare_prints"},"ev","str","^Look down at the brook","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Look at the glass","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^ Look at the steam ","/str",{"VAR?":"GlassState"},{"VAR?":"steamed"},"?",{"CNT?":"murder_scene.see_prints_on_glass"},"!","&&",{"CNT?":".^.c-0"},"&&",{"CNT?":".^.c-1"},"&&","/ev",{"*":".^.c-2","flg":21},"ev","str","^ Breathe on the glass ","/str",{"VAR?":"GlassState"},{"VAR?":"steam_gone"},"?","/ev",{"*":".^.c-3","flg":5},"ev","str","^Something else?","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["\n","ev",{"VAR?":"GlassState"},{"VAR?":"steamed"},"?","/ev",[{"->":".^.b","c":true},{"b":["\n","^Through the steamed glass I couldn't see the brook. ",{"->t->":"murder_scene.see_prints_on_glass"},{"->":".^.^.^.^"},"\n",{"->":".^.^.^.7"},null]}],"nop","\n","^I watched the little stream rush past for a while. The house probably had damp but otherwise, it told me nothing.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"GlassState"},{"VAR?":"steamed"},"?","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.c-0"},{"->":".^.^.^.7"},null]}],"nop","\n","^The glass in the window was greasy. No one had cleaned it in a while, inside or out.","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-2":["\n","^A cold day outside. Natural my breath should steam. ",{"->t->":"murder_scene.see_prints_on_glass"},"\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-3":["\n","^I breathed gently on the glass once more. ","ev",{"VAR?":"fingerprints_on_glass"},{"f()":"reached"},"/ev",[{"->":".^.b","c":true},{"b":["^ The fingerprints reappeared. ",{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"steamed"},"/ev",{"VAR=":"GlassState","re":true},{"->":".^.^.^.g-0"},{"#f":5}],"c-4":["\n","ev",{"CNT?":".^.^"},2,"<",{"VAR?":"fingerprints_on_glass"},{"f()":"reached"},"||",{"VAR?":"GlassState"},{"VAR?":"steamed"},"?","||","/ev",[{"->":".^.b","c":true},{"b":["\n","^I looked away from the dreary glass.","\n","ev",{"VAR?":"GlassState"},{"VAR?":"steamed"},"?","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"steam_gone"},"/ev",{"VAR=":"GlassState","re":true},"<>","^ The steam from my breath faded.","\n",{"->":".^.^.^.9"},null]}],"nop","\n",{"->":".^.^.^.^.^.^.^"},{"->":".^.^.^.14"},null]}],"nop","\n","^I leant back from the glass. My breath had steamed up the pane a little.","\n","ev",{"VAR?":"steamed"},"/ev",{"VAR=":"GlassState","re":true},{"->":".^.^.^.g-0"},{"#f":5}],"#f":7,"#n":"window_opts"}],{"g-0":[{"->":".^.^.window_opts"},{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-8":["\n","^I'd seen enough. I ","ev",{"VAR?":"bedroomLightState"},{"VAR?":"on"},"?","/ev",[{"->":".^.b","c":true},{"b":["^switched off the lamp, then",{"->":".^.^.^.8"},null]}],"nop","^ turned and left the room.","\n",{"->":"joe_in_hall"},{"->":".^.^.^.g-0"},{"#f":5}],"#f":7,"#n":"top"}],{"g-0":[{"->":".^.^.top"},{"#f":5}]}],{"operate_lamp":["^I flicked the light switch.","\n","ev",{"VAR?":"bedroomLightState"},{"VAR?":"on"},"?","/ev",[{"->":".^.b","c":true},{"b":["\n","<>","^ The bulb fell dark.","\n","ev",{"VAR?":"bedroomLightState"},{"VAR?":"off"},"+",{"VAR=":"bedroomLightState","re":true},"/ev","ev",{"VAR?":"bedroomLightState"},{"VAR?":"on"},"-",{"VAR=":"bedroomLightState","re":true},"/ev",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"bedroomLightState"},{"VAR?":"on_floor"},"?","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^ A little light spilled under the bed.",{"->":".^.^.^.7"},null]}],"nop","^ ","ev",{"VAR?":"bedroomLightState"},{"VAR?":"on_desk"},"?","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^ The light gleamed on the polished tabletop. ",{"->":".^.^.^.15"},null]}],"nop","\n","ev",{"VAR?":"bedroomLightState"},{"VAR?":"off"},"-",{"VAR=":"bedroomLightState","re":true},"/ev","ev",{"VAR?":"bedroomLightState"},{"VAR?":"on"},"+",{"VAR=":"bedroomLightState","re":true},"/ev",{"->":".^.^.^.9"},null]}],"nop","\n","ev","void","/ev","->->",{"#f":1}],"compare_prints":[{"temp=":"backto"},["ev","str","^Compare the prints on the knife and the window ","/str",{"list":{"WindowKnowledge.fingerprints_on_glass":2,"KnifeKnowledge.prints_on_knife":1}},{"VAR?":"fingerprints_on_glass_match_knife"},{"f()":"between"},"/ev",{"*":".^.c-0","flg":21},{"c-0":["\n","^Holding the bloodied knife near the window, I breathed to bring out the prints once more, and compared them as best I could.","\n","^Hardly scientific, but they seemed very similar - very similiar indeed.","\n","ev",{"VAR?":"fingerprints_on_glass_match_knife"},{"f()":"reach"},"pop","/ev","\n",{"->":"backto","var":true},{"#f":5}]}],{"#f":1}],"see_prints_on_glass":["ev",{"VAR?":"fingerprints_on_glass"},{"f()":"reach"},"pop","/ev","\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^But I could see a few fingerprints, as though someone hadpressed their palm against it.",{"->":".^.^.17"},null],"s1":["pop","^The fingerprints were quite clear and well-formed.",{"->":".^.^.17"},null],"#f":5}],"^ They faded as I watched.","\n","ev",{"VAR?":"steam_gone"},"/ev",{"VAR=":"GlassState","re":true},"ev","void","/ev","->->",{"#f":1}],"seen_light":[["ev","str","^ Turn on lamp ","/str",{"VAR?":"bedroomLightState"},{"VAR?":"on"},"!?","/ev",{"*":".^.c-0","flg":21},"ev","str","^ Move the light to the bed ","/str",{"VAR?":"bedroomLightState"},{"VAR?":"on_bed"},"!?",{"VAR?":"BedState"},{"VAR?":"bloodstain_visible"},"?","&&","/ev",{"*":".^.c-1","flg":21},"ev","str","^ Move the light back to the desk ","/str",{"VAR?":"bedroomLightState"},{"VAR?":"on_desk"},"!?",{"^->":"murder_scene.seen_light.0.c-3"},"turns",2,">=","&&","/ev",{"*":".^.c-2","flg":21},"ev","str","^Move the light to the floor ","/str",{"VAR?":"bedroomLightState"},{"VAR?":"on_floor"},"!?",{"CNT?":".^.^.^.0.top.c-0.9.bedhub.c-6"},"&&","/ev",{"*":".^.c-3","flg":21},{"c-0":["\n",{"->t->":".^.^.^.^.operate_lamp"},{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","ev",{"^var":"bedroomLightState","ci":-1},{"VAR?":"on_bed"},{"f()":"move_to_supporter"},"pop","/ev","\n","^I moved the light over to the bloodstain and peered closely at it. It had soaked deeply into the fibres of the cotton sheet.","\n","^There was no doubt about it. This was where the blow had been struck.","\n","ev",{"VAR?":"murdered_in_bed"},{"f()":"reach"},"pop","/ev","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","ev",{"^var":"bedroomLightState","ci":-1},{"VAR?":"on_desk"},{"f()":"move_to_supporter"},"pop","/ev","\n","^I moved the light back to the desk, setting it down where it had originally been.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-3":["\n","ev",{"^var":"bedroomLightState","ci":-1},{"VAR?":"on_floor"},{"f()":"move_to_supporter"},"pop","/ev","\n","^I picked the light up and set it down on the floor.","\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":[{"->":".^.^.^.^.0.top"},{"#f":5}]}],{"#f":1}],"#f":1}],"joe_in_hall":[["^My police contact, Joe, was waiting in the hall. 'So?' he demanded. 'Did you find anything interesting?'","\n",[["ev",{"^->":"joe_in_hall.0.found.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^"},1,"==","/ev",{"*":".^.^.c-0","flg":19},{"s":["^'Nothing.'",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Inventory"},{"VAR?":"knife"},"?","/ev",{"*":".^.^.c-1","flg":19},{"s":["^'I found the murder weapon.'",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.'","/str",{"VAR?":"prints_on_knife"},{"f()":"reached"},{"VAR?":"knifeState"},{"VAR?":"with_joe"},"?","&&","/ev",{"*":".^.^.c-2","flg":23},{"s":["^'There are prints on the blade",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"list":{"WindowKnowledge.fingerprints_on_glass_match_knife":3,"KnifeKnowledge.joe_seen_prints_on_knife":2}},{"f()":"reached"},"/ev",{"*":".^.^.c-3","flg":19},{"s":["^'They match a set of prints on the window, too.'",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.'","/str",{"VAR?":"body_on_bed"},{"VAR?":"murdered_in_bed"},{"f()":"between"},"/ev",{"*":".^.^.c-4","flg":23},{"s":["^'The body was moved to the bed at some point",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"murdered_in_bed"},{"f()":"reached"},"/ev",{"*":".^.^.c-5","flg":19},{"s":["^'The victim was murdered in bed, and then the body was moved to the floor.'",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^"},1,">","/ev",{"*":".^.^.c-6","flg":19},{"s":["^'That's it.'",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"joe_in_hall.0.found.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^He shrugged. 'Shame.'","\n",{"->":".^.^.^.g-0.done"},{"->":".^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"joe_in_hall.0.found.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^'Good going!' Joe replied with a grin. 'We thought the murderer had gotten rid of it. I'll bag that for you now.'","\n","ev",{"^var":"knifeState","ci":-1},{"VAR?":"with_joe"},{"f()":"move_to_supporter"},"pop","/ev","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"joe_in_hall.0.found.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^,' I told him.","\n","^He regarded them carefully.","\n","^'Hrm. Not very complete. It'll be hard to get a match from these.'","\n","ev",{"VAR?":"joe_seen_prints_on_knife"},{"f()":"reach"},"pop","/ev","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"joe_in_hall.0.found.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^'Anyone could have touched the window,' Joe replied thoughtfully. 'But if they're more complete, they should help us get a decent match!'","\n","ev",{"VAR?":"joe_wants_better_prints"},{"f()":"reach"},"pop","/ev","\n",{"->":".^.^.^.g-0"},{"#f":5}],"c-4":["ev",{"^->":"joe_in_hall.0.found.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^,' I told him. 'And then moved back to the floor.'","\n","^'Why?'","\n",[["ev",{"^->":"joe_in_hall.0.found.c-4.10.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^'I don't know.'",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.c-4.10.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^'Perhaps to get something from the floor?'",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.c-4.10.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^'Perhaps he was killed in bed.'",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"joe_in_hall.0.found.c-4.10.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Joe nods. 'All right.'","\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"joe_in_hall.0.found.c-4.10.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^'You wouldn't move a whole body for that.'","\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"joe_in_hall.0.found.c-4.10.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^'It's just speculation at this point,' Joe remarks.","\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-5":["ev",{"^->":"joe_in_hall.0.found.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^'Why?'","\n",[["ev",{"^->":"joe_in_hall.0.found.c-5.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^'I don't know.'",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.c-5.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^'Perhaps the murderer wanted to mislead us.'",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.c-5.9.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^'Perhaps the murderer hoped to clean up the scene.'",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"joe_in_hall.0.found.c-5.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^Joe nods. 'All right, then.'","\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"joe_in_hall.0.found.c-5.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^'How so?'","\n",[["ev",{"^->":"joe_in_hall.0.found.c-5.9.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.'","/str","/ev",{"*":".^.^.c-0","flg":22},{"s":["^'They wanted us to think the victim was awake",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.found.c-5.9.c-1.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.'","/str","/ev",{"*":".^.^.c-1","flg":22},{"s":["^'They wanted us to think there was some kind of struggle",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"joe_in_hall.0.found.c-5.9.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^, I replied thoughtfully. 'That they were meeting their attacker, rather than being stabbed in their sleep.'","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"joe_in_hall.0.found.c-5.9.c-1.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"^,' I replied. 'That the victim wasn't simply stabbed in their sleep.'","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^'But if they were killed in bed, that's most likely what happened. Stabbed, while sleeping.'","\n","ev",{"VAR?":"murdered_while_asleep"},{"f()":"reach"},"pop","/ev","\n",{"->":"joe_in_hall.0.g-0"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"joe_in_hall.0.found.c-5.9.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^'But they were disturbed? It's possible.'","\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-6":["ev",{"^->":"joe_in_hall.0.found.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^'All right. It's a start,' Joe replied.","\n",{"->":".^.^.^.g-0.done"},{"->":".^.^.^.g-0"},{"#f":5}],"#f":5,"#n":"found"}],{"g-0":[{"->":".^.^.found"},[["ev",{"VAR?":"joe_wants_better_prints"},{"VAR?":"joe_got_better_prints"},{"f()":"between"},"/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"joe_got_better_prints"},{"f()":"reach"},"pop","/ev","\n","<>","^ 'I'll get those prints from the window now.'","\n",{"->":".^.^.^.3"},null]}],["ev",{"VAR?":"joe_seen_prints_on_knife"},{"f()":"reached"},"/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ 'I'll run those prints as best I can.'","\n",{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["\n","<>","^ 'Not much to go on.'","\n",{"->":".^.^.^.3"},null]}],"nop","\n","end","^Once upon a time...","\n",["ev",{"^->":"joe_in_hall.0.g-0.done.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^There were two choices.",{"->":"$r","var":true},null]}],["ev",{"^->":"joe_in_hall.0.g-0.done.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^There were four lines of content.",{"->":"$r","var":true},null]}],{"c-7":["ev",{"^->":"joe_in_hall.0.g-0.done.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.g-1"},{"#f":5}],"c-8":["ev",{"^->":"joe_in_hall.0.g-0.done.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"done"}],{"#f":5}],"g-1":["^They lived happily ever after.","\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev",{"list":{},"origins":["OffOn"]},{"VAR=":"OffOn"},{"list":{},"origins":["SeenUnseen"]},{"VAR=":"SeenUnseen"},{"list":{"GlassState.none":1}},{"VAR=":"GlassState"},{"list":{"BedState.made_up":1}},{"VAR=":"BedState"},{"list":{"Inventory.none":1}},{"VAR=":"Inventory"},{"list":{},"origins":["Supporters"]},{"VAR=":"Supporters"},{"list":{}},{"VAR=":"knowledgeState"},{"list":{"OffOn.off":1,"Supporters.on_desk":1}},{"VAR=":"bedroomLightState"},{"list":{"Supporters.under_bed":4}},{"VAR=":"knifeState"},{"list":{},"origins":["BedKnowledge"]},{"VAR=":"BedKnowledge"},{"list":{},"origins":["KnifeKnowledge"]},{"VAR=":"KnifeKnowledge"},{"list":{},"origins":["WindowKnowledge"]},{"VAR=":"WindowKnowledge"},"/ev","end",null],"#f":1}],"listDefs":{"OffOn":{"off":1,"on":2},"SeenUnseen":{"unseen":1,"seen":2},"GlassState":{"none":1,"steamed":2,"steam_gone":3},"BedState":{"made_up":1,"covers_shifted":2,"covers_off":3,"bloodstain_visible":4},"Inventory":{"none":1,"cane":2,"knife":3,"ctf_code":4},"Supporters":{"on_desk":1,"on_floor":2,"on_bed":3,"under_bed":4,"held":5,"with_joe":6},"BedKnowledge":{"neatly_made":1,"crumpled_duvet":2,"hastily_remade":3,"body_on_bed":4,"murdered_in_bed":5,"murdered_while_asleep":6},"KnifeKnowledge":{"prints_on_knife":1,"joe_seen_prints_on_knife":2,"joe_wants_better_prints":3,"joe_got_better_prints":4},"WindowKnowledge":{"steam_on_glass":1,"fingerprints_on_glass":2,"fingerprints_on_glass_match_knife":3}}};