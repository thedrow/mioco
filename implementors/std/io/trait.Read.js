(function() {var implementors = {};
implementors['bytes'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for RingBuf","impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for ByteBuf","impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for ROByteBuf","impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for RopeBuf","impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='bytes/trait.Buf.html' title='bytes::Buf'>Buf</a> + 'static&gt;",];implementors['mio'] = ["impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/tcp/struct.TcpStream.html' title='mio::tcp::TcpStream'>TcpStream</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/unix/struct.UnixStream.html' title='mio::unix::UnixStream'>UnixStream</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/unix/struct.PipeReader.html' title='mio::unix::PipeReader'>PipeReader</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for Io","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/tcp/struct.TcpStream.html' title='mio::tcp::TcpStream'>TcpStream</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/unix/struct.UnixStream.html' title='mio::unix::UnixStream'>UnixStream</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/unix/struct.PipeReader.html' title='mio::unix::PipeReader'>PipeReader</a>",];implementors['mioco'] = ["impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/struct.TypedEventSource.html' title='mioco::TypedEventSource'>TypedEventSource</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='mio/io/trait.TryRead.html' title='mio::io::TryRead'>TryRead</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Reflect.html' title='core::marker::Reflect'>Reflect</a> + 'static</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
