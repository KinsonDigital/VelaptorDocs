// <copyright file="Program.cs" company="KinsonDigital">
// Copyright (c) KinsonDigital. All rights reserved.
// </copyright>

var game = new EmptyProject.Game();

/* Show the game window.  This starts the game loop.
 * Any code below this point will not run until the Show() method has finished.
 * This is because the Show() method will not completed until the windows is closed.
 *
 * 💡You can use the ShowAsync() method if you want to show the window in an async
 * fashion so you can perform other processes while the window is loading.
*/
game.Show();
