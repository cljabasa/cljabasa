---
title: 'Mac Mini (M1, 2020) Review'
description: "I did tease this in my review of the iPhone 6S Plus. It's roughly been six months since then and I have some thoughts."
publishDate: 'Monday, June 7 2021'
publishDateRaw: '2022-04-27T16:00:00.000Z'
author: 'Christian Jabasa'
heroImage: 'https://res.cloudinary.com/kadto/image/upload/v1622339281/cljabasa/blog/iphone-xr-review/quinton-coetzee-bZROblPGA60-unsplash.jpg'
published: false
layout: '../../layouts/BlogPostLayout.astro'
---

# Mac Mini (M1, Late 2020) Review

I know, I just got a MacBook Air in 2020. I don't usually sweat the timing of when I make major purchases, but the Air was particularly awful. The 2015 MacBook Air that  carried me throught college and the one that I had been previously started developing issues with charging and I needed a computer immediately. It was months after the transition to Apple Silicon was announcement and months before the refreshed hardware came out. Still, I went out and bought an Air with the decrepit Core i3 just so I could have something to use.

I had looked up several reviews about the Early 2020 MacBook Air so I knew what I was getting myself into. At least, I thought I knew what I was getting into. While its raw CPU performance is way better than my 2015 Air, a few months into using the laptop I just found myself thoroughly frustrated by the performance due in large part to its abysmal thermals. This computer really is a dumpster fire thanks to Intel's infernal 10th-generation Core i3 and Apple's horrendous cooling solution. Can you even call it a cooling solution when there aren't any heat pipes connecting the CPU's aluminum block to the fan?

With the great silicon trasition near its completion, 

# Rationale

I wanted something that wouldn't explode from the amount of code compilation that I do. That's it. I originally intended to buy an M1 MacBook Air, but I was short on dough, and frankly out of patience with the Core i3 Air. I pulled the trigger and got an M1 Mac Mini. I could've saved for another month to buy an M1 Air but given the shopping rush that is the holidays, it was the either getting a Mini now or the dread of having the money later to buy a computer that won't be in-stock. I already have the peripherals for it anyway, I thought. The ongoing global supply woes certainly didn't help and likely won't. Looking for a PS5? Yeah, I feel you.

# M1 Primer

Let's go over what M1 is and how we got here first.

The Apple M1 is not a CPU, but rather something called a System-on-a-Chip or SoC. Thus, the M1 chip. It has 16 billion transistors and is built on TSMC's 5-nanometer process. Think of it like a bowl of ramen: you have your noodles, veggies, meat, soup, and other ingredients there. The M1 packages CPU, GPU, RAM, SSD controllers, networking as well as specialized circuitry for things like h.265 encode/decode, and machine learning accelerators into one chip. It has more in common with that you'd find on smartphones than what you'd find on computers. Speaking of smartphones, the M1 also runs on the ARM instruction set. It even carries over the BIG.little approach present in most smartphone SoCs by packing four performance and four efficiency cores into one cluster. Phone makers, including Apple, have favored ARM for use on mobile devices for decades now because of its energy efficiency traits brought about by its simpler instructions. This is how the new 13-inch MacBook Pro is able to claim and meet its quoted 20-hours of battery life.

Intel and AMD CPUs, on the other hand, are running on an instruction set called x86_64. If you want to learn more about the differences between the RiSC and CiSC architecture, Engadget has a great explainer you can watch here.

Last year Apple announced that it would ship the first Mac hardware running its in-house silicon, officially starting the two-year transition. This isn't the first time the Mac underwent a transition like this when Apple made the switch from PowerPC to Intel nearly two decades back for most of the same reasons. PowerPC just didn't have the performance and efficiency that Intel had. Enter the late-2010s and Intel sat unchallenged for years and stagnated. AMD rose from the ashes and struck back hard with their Ryzen chips, sweeping Intel off of their feet. The last year five years have been miserable for Intel, and by extension, Mac users. Apple's stubbornness in not equipping their computers with decent coolers and Intel's desperate attempts to squeeze ever more out of their 14-nanometer process resulted in computers that were furnaces. Even laptops from Dell and other PC OEMs weren't spared from Intel's infernally hot chips. Only now after a long beatdown from AMD and a recent breakup with Apple has Intel regained a bit of foothold with Alder Lake. Consumers, rejoice.

This integration between what are usually separate components is how the M1 is able to deliver incredible performance and power efficiency. The M1 is also manufactured on TSMC's 5-nanometer process which further contributes to its very low power draw.

The M1 is a fascinating 

# Performance

The base model M1 Mac Mini has eight CPU cores and eight GPU cores. That's the same as the entry-level M1 MacBook Pro which costs more than double but as we'll find out later the Mini is able to go further with that same chip. 

Anyone who's delved into computers deep enough knows that the closer a piece of memory is to the CPU the faster that piece of memory is. Your L1 to L3 CPU cache are the fastest with your system RAM coming in second and your boot drive at a very distant third. The M1 has a huge CPU cache of 32-megabytes and a scheduler to match that keeps the cores well-fed with instructions. I won't tell you schedulers work to keep CPUs from stalling, but it and said large CPU cache are the reason why the M1 is so fast despite lacking equivalents to TurboBoost and HyperThreading. Yes, the M1 rocks an 8-core, 8-thread CPU at 3.20-gigahertz.

## Daily

Fun fact: day-to-day activities like opening programs depends on good single-core performance. On Intel CPUs, this is where TurboBoost comes into play. TurboBoost essentially lets the CPU to run far above its base clock to give you that extra kick when launching something like Chrome. Should thermals allow, TurboBoost can also aid in more demanding tasks like code compilation and video editing. The Core i3 on my Air has a base frequency of 1.10GHz but can turbo up to 3.20GHz. The Air can't hold that turbo for very long because of its severely constrained thermals. Now let's talk multi-core. Your day-to-day doesn't benefit much from high core counts, but let's drive right in anyway. HyperThreading on Intel CPUs aid in multi-threaded activities, but don't let it fool you into thinking it's doubling your core count because it's reporting double the logical cores to your operating system. At best, HyperThreading is able to eke you out roughly 1.5x more performance. 

The M1, as mentioned earlier, doesn't have an equivalent for TurboBoost and HyperThreading. This is where BIG.little comes in. By having BIG performance cores and little efficiency cores, M1 has the grunt of high-frequency cores for strong single-threaded workloads, the power savings of energy-efficient cores, and the multi-threaded muscle of both. Opening programs from a cold start on my Mac mini is fast as all hell; a hell of a lot faster than on my Intel MacBook Air. This performance gain isn't likely because of M1 alone, but a combination of faster SSDs and better software optimization for the ARM instruction set. Still, it all adds up to a computer that effortlessly nails the day-to-day.

Moving over to RAM. Unified Memory lets you go a lot further with 8-gigabytes of RAM than on another Mac running on the same 8-gigabytes with an Intel CPU. Apart from the latency gains by having RAM closer to the CPU, I noticed that macOS was applying compression to upwards of 3-gigabytes of memory. The custom SSD controller also appears to lessen the performance penalty when your open programs eventually spill over from memory to your boot drive. You normally notice severe stuttering on even the fastest SSD when your computer runs out of memory because the OS starts using it for the overflow. If you weren't able to spring for the high-end memory configuration, this is the most 8-gigabytes of RAM you'll ever have. Your memory ceiling is higher than you think. Keep in mind that while impressive, it's no miracle.

## Software Development

Code compilation is fast. Really fast. Even compiling a large Nuxt 2 project on Node 14 project through Rosetta 2 is twice as fast as the Core i3-100NG3 on my MacBook Air. 

### Opening Editors

I use VS Code. 

### Compatibility

I work with node.js. 

### Compilation Performance

hiughjkghghj

## YouTube

YouTube isn't that taxing on modern hardware. Without changes to the playback speed, that is. But because I watch in 1080p at 2x speed, the Early 2020 Air sweats bullets playing back videos. I also had to watch in Brave or Vivaldi since increasing playback speed in Safari does some funky things to the audio. Yes, I'm a monster who speeds up videos. Most 

Lesson time. YouTube videos are encoded in [VP9](https://en.wikipedia.org/wiki/VP9) and sometimes the bleeding-edge [AV1](https://en.wikipedia.org/wiki/AV1); it falls back to the more ubiquitous [h.264](https://en.wikipedia.org/wiki/Advanced_Video_Coding) if your device doesn't support the former two. VP9 and AV1 are vastly more complex than the aging h.264. On YouTube, where every video is low bitrate, there is a discernible difference between all three codecs. From best to worst: AV1, VP9, then h.264. The same order applies to how hard your computer needs to work in order to decode what you're watching. Still, the insane compression introduces a ton of visual artifacts regardless of the video's resolution and codec.

[cpu-monkey](https://www.cpu-monkey.com/en/cpu-intel_core_i3_1000ng4) says the Core i3-100NG3 in the Air does in fact have hardware-acceleration for VP9 but not AV1. Despite supporting hardware and encode and decode for VP9, the Air reaches upwards of 80-degrees playing back 1080p and 2x speed. Mind you, CPU usage was below 50% but it still ran hot. 1440p at 1.5x speed had the Air hovering around the 60-degree mark which was quite odd.

The M1 has hardware acceleration for most of the same codecs as the Core i3, says [cpu-monkey](https://www.cpu-monkey.com/en/cpu-apple_m1-1804). So encode and decode support for VP9 but not for AV1. Playing back 1080p YouTube at 2x speed is a breeze on the M1 with roughly 16-percent CPU usage and with the M1 Die Average temp not exceeding 32-degrees Celsius. The Mac mini stays agile even with the video running the background, something that could be said for the Core i3. AV1, while decoded in software, performs admirably on the M1 with CPU usage hovering around 21-percent playing back the same 1080p video at 2x speed. The computer's surface remained cool to the touch decoding both. I can't test power draw but I can give you my word that it doesn't consume a lot of energy if iStat Menus is to be believed. So if you're a normal person with a MacBook watching 1080p YouTube at 1x speed, you'll get a lot of mileage from your notebook's battery. If you use Safari over Chrome, you'll get even more juice.

Now let's talk qHD and 4k. It's not often, but when I end up watching YouTube in resolutions greater than 1080p, I don't speed up playback to 2x. I mean, why would I? If I'm watching content in 2160p, I want to appreciate the video's crispiness. I'm happy to report that the M1 plays back 4k videos encoded in VP9 and AV1 like a champ. I don't have a UHD monitor to appreciate all the glory of 4k, but there are discernible improvements to sharpness even on a 1080p display. But like I mentioned before, the low bitrate of the really do hurt the visual fidelity of streaming video, not just YouTube. It's entirely possible for high-bitrate 1080p—even h.264 1080p—to look better than low-bitrate VP9 4k. So if you're looking to stream in greater fidelity, you must use resolution to compensate.

I will note that while it's fine to not have support for the AV1 codec for now, it will likely come in handy down the line as more services like Netflix adopt it. But given that it took Apple nearly a decade to enable VP9 decode on Safari even on Mac hardware that supported it, I'm not holding my breath for AV1 hardware acceleration anytime soon.

## Pixelmator Pro

I usually don't do a lot of image editing but when I do it's just basic color and perspective correction. Performance is butter-smooth on the M1. Moving the sliders around gave instant feedback while AI-powered features like _ML Enhance_ and one-click _Remove Background_ take seconds. A testament to the M1's incredible 16-core Neural Engine and Pixelmator Pro's stellar optimization for it. I am let down by my lackluster external display though. But speaking of display, my MacBook Air has a great screen built right in. I do crawl right back to it from time to time just for color accuracy, but how does Pixelmator Pro perform on it? Passable. Simple adjustments do stutter when you move the sliders around but it's nothing worth losing sleep over. Where the Air falls short is in aforementioned AI-powered features. I'm not sure if ML on the Air is being relegated to the Core i3's CPU or GPU but it's apparent from using one-click background remove took roughly ten times longer on the Air. That's embarrassing.

Switching over to graphic design, both have excellent performance for simple to moderately complex work like creating and editing an app icon. That's just about the most graphic design I do these days.

## Handbrake

I frequently use Handbrake to shrink screen recordings before sending them. I'm happy to report that encoding a screen recording using the Fast 1080p present with a few changes to some parameters was completed under the video file's own duration.

## Gaming

Mac and gaming usually belong in the same sentence, but here we are. So how's gaming on the M1's integrated GPU? In a word: surprising. Hollow Knight, running under Rosetta, is very smooth. I wasn't able to see what framerate it was running at but it was stutter-free. Fantasian also ran without a hitch even with its visual fidelity set to high. You'll be able to play graphically-simpler titles like Stardew Valley will run without any problems.

# Build Quality

The M1 Mac Mini is built like a tank. I've probably said that about a million other Apple products but it's true. The Mini's unibody aluminum construction feels smooth and cool to the touch. The main chassis and the rear I/O shield have no seams whatsoever. It's the same design from 2018 but I understand why Apple had to keep it because creating new tooling for brand new SKUs will have driven up cost.

## I/0

While the M1 Mac Mini has fewer ports than its Intel version from 2018, it still has the most I/O out of all the M1 machines. It's also the only M1 computer that will let you connect two external displays simultaneously: one through HDMI and one through USB 4 over DisplayPort mode. The M1 version carries the same Gigabit Ethernet port, HDMI 2.0 port, and two USB Type-A ports; trading the four Thunderbolt ports for two USB 4 Type-C ports. 

To say I was starved for ports during my time with the Early 2020 MacBook Air would be an understatement. My two Thunderbolt 3, Type-C ports were taken up by power and the external display. 

To be honest, the Mini has more ports than I could hope to use. Apart from power, only a monitor is plugged to its HDMI port right now. The Mini is connected to the internet over Wi-Fi and I just use a bluetooth mouse and keyboard for input. No, I didn't ever use the SD Card slot on my 2015 Air and I still have no use for it today.

But, IMO, the real godsend here is the two Type-A ports. For mobile app development, it means simply hooking up your phone to the computer and code because some reason phones still ship with Type-A to Type-C cables. Yes, it's possible to do this over Wi-Fi, but I experienced frequent connection issues between the computer and the phone. Not to mention the phone gets to top up its battery while it's plugged into the Mac Mini. Yes, I know Simulators a thing. But as I mentioned earlier, the RAM constraint is painful.

## Thermals and Power Draw

The Mac Mini has the best thermals out of all the M1 machines. Remember, Apple used the same Unibody chassis and cooling solution as the 2018 Mac Mini. This design was meant to cool a four-core Intel Core i3-8100B to a six-core 65-watt TDP [Intel Core i7-8700B](https://www.intel.com/content/www/us/en/products/sku/134905/intel-core-i78700b-processor-12m-cache-up-to-4-60-ghz/specifications.html). The M1? Well, Apple didn't tell us what its TDP is but some sources have reported it to hover around [20-watts to 24-watts tops](https://www.techspot.com/news/88482-apple-mac-mini-m1-power-consumption-3-times.html). It's in the single-digits when idle. That's a lot of thermal headroom.

When it came to said thermal headroom, the Late 2020 Mac Mini has so much of it that touching the computer doesn't burn your fingers—like the i3 MacBook Air—even while maxing out all eight cores; it's warm but not hot. And like the M1 MacBook Pro, the Mini has active cooling. But the latter is even more of a champ in sustained workloads than the former because the Mini just has so much cooling capacity. What's even more impressive is that the computer is able to perform this well inaudibly. Not once in my time with Mini has it spun up its fan to the point where I heard it.

Active cooling does have drawbacks that passive cooling simply don't have. For one, the Mac Mini draws in air from the bottom and exhausting it to rear. Dust build up is one of main culprits when it comes to performance degradation due to reduced cooling. This won't happen as fast as you might think but it is something to think about. The M1 MacBook Air, while not as strong in sustained workloads, just doesn't have to deal with dust build up as it doesn't have a fan.  The M1 Air will also be inaudible thanks to the lack of said fan.

For power draw, Apple has [this handy page](https://support.apple.com/en-us/HT201897) on their website. There's no contest between the M1 and the Intel ones with the i7 drawing a maximum 122-watts from wall and the i3 pulling 19.9-watts at idle. Also, I might have a Software Engineering degree but we didn't have thermodynamics in the curriculum so I have no idea what BTU/h is.

**TL;DR: the M1 Mac Mini is cool and quiet.**

# Multimedia

The Mac Mini _can_ be a multimedia powerhouse. But unlike a MacBook where you get great speakers and a great display built-in, the experience on the Mini will rest on your peripherals.

I watched Zack Snyder's Justice League on both computers and I have to say: The Air's Dolby Vision and Atmos certifications destroy my Mac Mini setup. The difference in visual fidelity is especially apparent in the film's climax where Barry enters the Speed Force to turn back time. This scene greatly benefits from that better dynamic range that the display allows. It's not just colors too. The high pixel-density of the integrated Retina display also makes fine particle details like dirt extra-crispy. 

Now, watching Justice League on the Mini's integrated speakers is a crime so I hooked up my Sony WH-1000XM3s. The display is just my Mi 23.8" Desktop Monitor. From the get-go, the display is a clear quality downgrade. I did like the size increase because the film has a director's-vision-preserving 4:3 aspect-ratio. Dynamic range and colors were pretty meh, as expected. I just didn't feel transported watching the movie on my external display.

If you're an avid content consumer who has their media in multiple places, the Mini is the clear winner. Its extra ports allows you to more easily get to those. Streaming 4K? Hook up an ethernet cable to it. External media? Hell, you have USB-A ports. UHD monitor? HDMI and DisplayPort Mode over the USB 4, Type-C port.

Audio is a different story. While the integrated speakers on recent MacBooks sound really great, they're still just laptop speakers. The XM3s obviously trounced the Air's speakers when I saw Justice League. And before you ask, my monitor doesn't have built-in speakers. But the real comparison here really is to the Mini's own speakers. It's... what you'd expect: a tinny driver inside the unibody enclosure that sounds so very tinny. Literally anything else will sound better than what it comes with. Hell, even an iPhone's speakers sound better. Take advantage of your monitor's speakers if they come with one or better yet get external speakers.

I used to use the Air's built-in speakers to listen to music while I'm working. This isn't something I'm able to do with the Mini as it tethers me to it. Yes, I have AirPods and do I use those occasionally but certain situations, like when I don't to plug up my ears, really call for speakers. I haven't gotten around to purchasing external speakers yet.

## Video Conferencing

The Mac Mini clearly doesn't have a webcam or an integrated microphone. But adding one isn't too difficult. Hooray USB-A ports. 

Now, the M1 MacBooks do apply post-processing to the video feed coming from their integrated 720p iSight camera but this is something I'm not able to confirm on external USB webcams on the Mini. Still, both the camera and integrated mic on my Logitech C270 worked flawlessly with it. Going external certainly had immediate benefits too. Unlike laptops where the viewing angles are almost never optimal because of the how their webcam follows how far back you angle the screen, desktops have no such problem. Even a simple USB webcam can easily achieve ideal perspective through their basic mounting system, straight columns in the background and all.

While you can get external options for a laptop, it really doesn't compel anyone enough to buy a better webcam when the integrated one gets them by just fine. My C270 has the same resolution as my MacBook's webcam but image quality is noticeably better on the Logitech with better exposure and less grain. Remember, there's more to image quality than resolution. Integrated laptop webcams also physically constrained depth-wise. If you know anything at all about optics it's easy to see why good cameras demand z-index. No amount of machine-learning-powered touch ups can overcome physics.

The Mini doesn't have a built-in microphone so how you sound will depend on your peripherals. AirPods have decently good mics, if you're in a pinch. I usually use just aforementioned integrated microphone on the C270 webcam. Like the webcam situation on earlier, the desktop will afford you better options since you'll actually be forced to consider your setup than just accepting what you've been given on a laptop. Care about sounding well to people on the end of the call? Get an audio interface paired with a dynamic XLR mic or get a cheap USB condenser mic if you're broke. The Mini will easily let you plug those in thanks to its healthy port selection.

On the system's side, conference calls used to tax the hell out of Core i3 in my MacBook Air. Worse when I screen share. The fans frequently sounded like jet engines. Oh yeah, I won't stop rambling about the stupid cooling solution. Well, no longer with the M1. Video filters that were once unavailable in Zoom like background blur are handled by the Mini like a champ. The fan? At its lowest speed. The SoC? Barely breaking a sweat.

I also like being able to physically disconnect the camera from the computer. Checkmate, NSA.

## Display Flickering Issue

Flickering on external displays on the M1 Mini, as well the the M1 Air and Pro, is a well-documented issue. 

# Intangibles

## Portability

I've been on laptops for over ten years so I was a bit anxious to get a desktop. I was enamored with the idea of my work being able to go with me wherever I was. Now, as a professional, I'm not sure if that's still what I want anymore. 

## Power Outages and Sleep Mode

Power interruptions are frequent where I live. This was something I completely took for granted with my time using laptops. I was able to use the Air on battery for hours on end. I did fork over more money to get a UPS, but they don't last as long as notebook cells. With M1 Mini drawing power in the single digits, though, I'd figured the UPS would give ample time to properly turn the Mac Mini off. I still miss the simplicity of opening my MacBook then watching the thing power itself on. I also feel less comfortable putting desktops in sleep mode overnight, something I did with the Air all the time.

## Barely Using a Laptop Outside Anyway

Even before COVID, I barely brought my MacBook with me. It was a different story during college where I took it almost everywhere I went. But in the present, no. After more than a month with the Mac Mini I've begun to develop an appreciation for single-purpose devices again. Just not to point of getting a mirrorless camera and an MP3 player over an iPhone or anything. It might anchor me to my desk but it feels liberating. Knowing that I should be outside when I'm outside and working when I should be working. It's letting the boundaries set themselves up for you, and it's a great feeling.

## Battery Health Anxiety No More

With my last MacBooks, I always worried about battery degradation. Yes, the lithium-polymer cells inside Apple laptops aren't meant to last forever but I was dismayed to find out that I only had ~82% of its design capacity after 13 months. I did try letting the battery cycle to full charge and down to reasonable lows for months. After which I tried just plugging it the thing for the entire day. And surprise, it didn't matter which charging strategy I employed. Sure, micromanaging it might've let me eke out more from the battery, but when you have work to get done this really shouldn't be one additional thing crowding up your mind. Hell, it's why we buy Apple hardware in the first place. Know that all batteries will degrade over time and eventually need to be replaced.

With desktop computers, you'll have no such worry. What you will have to think about though, something I'd already talked about above, is power outages. Laptop batteries, especially MacBook batteries, are notoriously expensive to get replaced. Replacing a worn out UPS, on the other hand? A lot less.
