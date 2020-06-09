import discord
import random
import asyncio
from discord.ext import commands

client = discord.Client()
client  = commands.Bot(command_prefix = '/')

@client.event
async def on_ready():
    print("DavidBot is ready.")

#@client.event
#async def on_member_join(member):
    #print(f'{member} has joined this lame server')

#@client.event
#async def on_member_left(member):
    #print(f'{member}s ass has removed from the server')

@client.command()
async def ping(ctx):
        await ctx.send("hmmmmmmmmmmmmmmmmmmmmmm")

@client.command()
async def fuck(ctx):
        await ctx.send("fuck")

@client.command(aliases=['ques','question'])
async def askME(ctx,que):
    responses = ['no',
                  'yes'  ]
    await ctx.send(f'{random.choice(responses)}')


@client.command(aliases=['playCAH','play CAH','playcah','play Cards Against Humanity''CAH','Cards','Humanity'])
async def CAH1(message):
   
    responses = ['Hey Reddit! I’m__________________.Ask me anything.',
'Introducing\nX-treme Baseball!\nIt’s like baseball,\nbut with __________!',
'What is Batman’s\nguilty pleasure.',
'TSA guidelines\nnow prohibit\n__________________\non airplanes.',
'When Pharaoh\nremained unmoved,\nMoses called\ndown a Plague of\n__________________.',
'Daddy, why is\nmommy crying?',
'What are my\nparents hiding\nfrom me?',
'What’s that sound?',
'What ended my\nlast relationship?',
'War!\nWhat is it good for?',
'Next on ESPN2:\nThe World Series of\n__________________.',
'Here is the church\nHere is the steeple\nOpen the doors\nAnd there is\n__________________.',
'Military historians\nremember Alexander\nthe Great for his\nbrilliant use of\n____________________\nagainst the Persians.',
'When I am a\nbillionaire, I shall\nerect a 50-foot\nstatue to\ncommemorate\n__________________.',
'Why am I sticky?',
'Uh, hey guys,\nI know this was my\nidea, but I’m having\nserious doubts\nabout ____________.',
'A recent laboratory\nstudy shows that\nundergraduates have\n50 less sex after\nbeing exposed to\n___________________.',
'But before I kill\nyou, Mr. Bond,\nI must show you\n__________________.',
'During sex, I like\nto think about\n__________________.',
'__________________.\nThat was so metal.',
'What would\ngrandma find\ndisturbing, yet\noddly charming?',
'Coming\nto Broadway\nthis season,\n__________________:\nThe Musical.',
'This is the way the\nworld ends This is\nthe way the world\nends Not with\na bang but with\n__________________.',
'After eight years in\nthe White House,\nhow is Obama\nfinally letting\nloose?',
'What’s that smell?',
'Bravo’s new reality\nshow features\neight washed-up\ncelebrities living\nwith _____________.',
'__________________.\nIt’s a trap!',
'I got 99 problems\nbut _______________\nain’t one.',
'Hey guys,\nwelcome to Chili’s!\nWould you like\nto start the night\noff right with\n_________________?'
                ]
    await message.channel.send(f'{random.choice(responses)}')


@client.command()
async def pick(message):
    responses = ['Flying sex snakes.',
                    'Seeing what happens when\nyou lock people\nin a room with\nhungry seagulls.',
                    'Many bats.',
                    'Famine.',
                    'Flesh-eating bacteria.',
                    'Not giving a shit about the\nThird World.',
                    'Magnets',
                    'Shapeshifters.',
                    'A crucifixion.',
                    'Jennifer Lawrence.',
                    '72 virgins.', 
                    'A live studio\naudience.',
                    'A time travel\nparadox.',
                    'Authentic\nMexican cuisine.',
                    'Doing crimes. ',
                    'Synergistic\nmanagement solutions.',
                    'Crippling debt. ',
                    'Daddy issues.',
                    'Used panties.',
                    'A fart so powerful\nthat it wakes the\ngiants from their\nthousand-year\nslumber.',
                    'Former President\nGeorge W. Bush.',
                    'Full frontal nudity',
                    'Soft, kissy\nmissionary sex.',
                    'BATMAN!',
                    'Agriculture.',
                    'Barely making\n$25,000 a year',
                    'Covering myself\nwith Parmesan\ncheese and chili\nflakes because\nI am pizza.',
                    'Laying an egg.',
                    'Getting naked\nand watching\nNickelodeon.',
                    'Pretending\nto care.',
                    'Natural selection.',
                    'Coat hanger\nabortions.',
                    'Sex with\nPatrick Stewart.',
                    'My abusive\nboyfriend who\nreally isn’t so bad\nonce you get to\nknow him.',
                    'Having big\ndreams but no\nrealistic way to\nachieve them.',
                    'Seeing Grandma\nnaked.',
                    'Boogers.',
                    'The inevitable\nheat death of\nthe universe.',
                    'Swooping.',
                    'Mansplaining.',
                    'A homoerotic\nvolleyball\nmontage.',
                    'The miracle\nof childbirth.',
                    'The Rapture.',
                    'Whipping it out.',
                    'White privilege.',
                    'Alexandria\nOcasio-Cortez.',
                    'Putting things\nwhere they go.',
                    'Fragile\nmasculinity.',
                    'All-you-can-eat\nshrimp for $8.99.',
                    'Emerging from\nthe sea and\nrampaging\nthrough Tokyo.',
                    'The Hamburglar.',
                    'AXE Body Spray.',
                    'The Blood\nof Christ.',
                    'An old guy who’s\nalmost dead.',
                    'Kanye West.',
                    'Hot cheese.',
                    'Raptor attacks.']
    await message.channel.send(f'@{message.author.name} picked:\n{random.choice(responses)}')


@client.command(aliases=['CAH--help','cah--help'])
async def helpME(ctx):
        await ctx.send(f'CARDS AGAINST HUMANITY\n No rules bc rules are for fools,\n After davidBOT picked a card for you,\n type "/pick" for the next card to appear\nthis are all from cardsagainsthumanity.com btw')
client.run('NzE1OTE4NTI0OTU4MjQ0ODY0.XtEbrg.caSdVxzFFP8LfgAl-TF-1xYGfqQ')
