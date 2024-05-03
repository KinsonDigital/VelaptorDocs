import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import codeSnippet from "@site/static/img/code-snippet.png";
import spaceInvaders from "@site/static/img/space-invaders.png";
import kdSilkLogos from "@site/static/img/kd-silk-logo-combo.png";

const CodeSnippetSvg: React.ComponentType<React.ComponentProps<'svg'>> = codeSnippet;
const SpaceInvadersSvg: React.ComponentType<React.ComponentProps<'svg'>> = spaceInvaders;
const KdSilkLogosSvg: React.ComponentType<React.ComponentProps<'svg'>> = kdSilkLogos;

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="flex flex-row items-start">
					<div className='flex flex-col'>
						{/* <CodeSnippetSvg width={"100%"} className='self-center'/> */}
						<img src={codeSnippet} width={"72.7%"} className='self-center' />
						<h3 className='self-center'>Easy to Use . . .</h3>
						<div className='self-center'>
							<p>Velaptor is designed to be easy to start with and to get your 2D</p>
							<p>game or application up and running quickly.</p>
						</div>
					</div>
					<div className='flex flex-col ml-5 mr-5'>
						{/* <SpaceInvadersSvg width={"100%"} className='self-center'/> */}
						<img src={spaceInvaders} width={"70%"} className='self-center' />
						<h3 className='self-center'>Focus on What Matters . . .</h3>
						<div className='self-center'>
							<p>Velaptor lets you focus on developing your game so you don't have to worry about the low level details.</p>
						</div>
					</div>
					<div className='flex flex-col'>
						{/* <KdSilkLogosSvg width={"100%"} className='self-center p-400'/> */}
						<img src={kdSilkLogos} width={"100%"} className='self-center' />
						<h3 className='self-center'>Powered by . . .</h3>
						<div className='self-center'>
							<a href="https://dotnet.microsoft.com/en-us/languages/csharp">C#</a>, <a href="https://github.com/KinsonDigital">KinsonDigital</a> technologies, and <a href="https://github.com/dotnet/Silk.NET">SILK.NET</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
