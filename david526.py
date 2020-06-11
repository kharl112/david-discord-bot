import discord
import random
import asyncio
from discord.ext import commands

client = discord.Client()
client = commands.Bot(command_prefix = "/")


@client.event
async def on_ready():
    print("DavidBot is ready")
#Cards Against Humanity Section
@client.command()
async def pickblack(message):
    urls = [
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
    e = discord.Embed(
        description = f"picked a black card",
        colour = discord.Colour.blue(),)
    e.set_author(name = message.author ,icon_url = message.author.avatar_url)
    e.set_image(url = random.choice(urls))
    e.set_footer(text = "Tip: there's a lot of commands for this game! type '/playcah'\nfor more..")
    print(message.author.name)
    await message.channel.send(embed = e)

@client.command()
async def pickwhite(message):
    answers = [
       "https://i.imgur.com/jWj1Q2d.png",
       "https://i.imgur.com/1fzyoWm.png",
       "https://i.imgur.com/di7oW7V.png",
       "https://i.imgur.com/6T9H0e5.png",
       "https://i.imgur.com/VBdgTQ3.png",
       "https://i.imgur.com/fRrayAn.png",
       "https://i.imgur.com/C4dyEsE.png",
       "https://i.imgur.com/tF3n33v.png",
       "https://i.imgur.com/2D96cNZ.png",
       "https://i.imgur.com/hJTsnNX.png",
       "https://i.imgur.com/GfMmsqS.png",
       "https://i.imgur.com/SESywch.png",
       "https://i.imgur.com/jCLi5w3.png",
       "https://i.imgur.com/CvTySyZ.png",
       "https://i.imgur.com/qhqSGbT.png",
       "https://i.imgur.com/VV975Ss.png",
       "https://i.imgur.com/DWM2nhN.png",
       "https://i.imgur.com/IJdEqlu.png",
       "https://i.imgur.com/JATNPRh.png",
       "https://i.imgur.com/m26uV7r.png",
       "https://i.imgur.com/CKwm7N4.png",
       "https://i.imgur.com/lnJi8sF.png",
       "https://i.imgur.com/BnAxzAM.png",
       "https://i.imgur.com/qjRHJAC.png",
       "https://i.imgur.com/wz8ZHcK.png",
       "https://i.imgur.com/9KlNiI2.png",
       "https://i.imgur.com/TMUdrwB.png",
       "https://i.imgur.com/uwZUPSd.png",
       "https://i.imgur.com/dwReKsW.png",
       "https://i.imgur.com/UoJ2S2r.png",
       "https://i.imgur.com/iDu9eOU.png",
       "https://i.imgur.com/yroa19m.png",
       "https://i.imgur.com/lS5CQiP.png",
       "https://i.imgur.com/ONR5JJj.png",
       "https://i.imgur.com/ftWsWTR.png",
       "https://i.imgur.com/Cxlxw4S.png",
       "https://i.imgur.com/yzphpAC.png",
       "https://i.imgur.com/Ek4YuFj.png",
       "https://i.imgur.com/5ij1WNF.png",
       "https://i.imgur.com/uXlXUY4.png"
        ]
    g = discord.Embed( 
        description = f"picked a white card",
        colour = discord.Colour.red())
    g.set_author(name = message.author ,icon_url = message.author.avatar_url)
    g.set_image(url = random.choice(answers))
    g.set_footer(text = "Tip: there's a lot of commands for this game! type '/playcah'\nfor more..")
    print(message.author.name)
    await message.channel.send(embed = g)

@client.command()
async def playcah(message):
    z = discord.Embed(title = "Cards Against Humanity",
                      description = "Beta v0.02")
    z.set_thumbnail(url = "https://cardsagainsthumanity.com/v8/images/social-3f4a4c57.png")
    z.add_field(name = "Basic Commands",value = "[/pickblack] to pick black card (blank card)\n[/pickwhite] to pick white card (fill card)",inline = True)
    z.set_footer(text = "https://cardsagainsthumanity.com/")
    print(message.author.name)
    await message.channel.send(embed = z)

#Random Section
@client.command()
async def roll(message):
    sides = [1,2,3,4,5,6]
    result = random.choice(sides)
    if result <= 3:
        v = discord.Embed(title = "🎲Die roll",
        description = "just [/roll] and you're good..",
        colour = discord.Colour.red())
    
        v.add_field(name = f"{message.author.name}", value = f" rolled a die and got {result}", inline = False)
        await message.channel.send(embed = v)
    else:
        v = discord.Embed(title = "🎲Dice roll",
        description = "just [/roll] and you're good..",
        colour = discord.Colour.green())
    
        v.add_field(name = f"{message.author.name}", value = f" rolled a die and got {result}", inline = False)
        await message.channel.send(embed = v)

client.run('NzE1OTE4NTI0OTU4MjQ0ODY0.XtEbrg.caSdVxzFFP8LfgAl-TF-1xYGfqQ')
