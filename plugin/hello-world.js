// class XskPlugin {
//   apply(compiler) {
//     compiler.hooks.done.tap('XskPlugin', (stats) => {
//       console.log('xsk test')
//     });

//     compiler.hooks.emit.tapAsync('XskPluginAsync', (compilation, callback) => {
//       setTimeout(() => {
//         console.log('async');
//         callback();
//       }, 1000);
//     });

//     compiler.hooks.emit.tapAsync('XskPluginAsync', (compilation, callback) => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log('async');
//           resolve();
//         }, 1000);
//       })
//     })

//   }
// }

// module.exports = XskPlugin;


class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      console.log('Hello World!');
    });
  }
}

module.exports = HelloWorldPlugin;