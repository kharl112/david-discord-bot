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
    responses = [
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-1.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-2.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-3.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-4.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-5.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-6.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-7.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-8.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-9.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-10.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-11.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-12.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-13.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-14.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-15.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-16.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-17.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-18.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-19.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-20.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-21.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-22.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-23.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-24.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-25.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-26.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-27.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-28.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-29.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-0.png",
       ]
    e = discord.Embed()
    e.set_image(url= random.choice(responses))
    await message.channel.send(f'{message.author.name} picked a black card', embed=e)

@client.command()
async def pick(message):
    responses2 = [
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-0.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-1.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-2.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-3.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-4.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-5.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-6.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-7.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-8.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-9.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-10.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-11.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-12.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-13.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-14.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-15.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-16.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-17.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-18.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-19.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-20.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-21.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-22.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-23.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-24.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-25.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-26.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-27.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-28.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-29.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-30.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-w-31.png",
        ]
    e = discord.Embed()
    e.set_image(url= random.choice(responses2))
    await message.channel.send(f'{message.author.name} picked a white card', embed=e)


@client.command(aliases=['CAH--help','cah--help'])
async def helpME(ctx):
        await ctx.send(f'CARDS AGAINST HUMANITY\n No rules bc rules are for fools,\nAfter davidBOT picked a card for you,\ntype "/pick" for the next card to appear\nthese are all from cardsagainsthumanity.com btw')
client.run('NzE1OTE4NTI0OTU4MjQ0ODY0.XtEbrg.caSdVxzFFP8LfgAl-TF-1xYGfqQ')
