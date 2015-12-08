(function() {var implementors = {};
implementors['bytes'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.RingBuf.html' title='bytes::RingBuf'>RingBuf</a>","impl&lt;T: <a class='trait' href='bytes/buf/trait.Buf.html' title='bytes::buf::Buf'>Buf</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.Take.html' title='bytes::Take'>Take</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.ByteBuf.html' title='bytes::ByteBuf'>ByteBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.ROByteBuf.html' title='bytes::ROByteBuf'>ROByteBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.RopeBuf.html' title='bytes::RopeBuf'>RopeBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='bytes/buf/trait.Buf.html' title='bytes::buf::Buf'>Buf</a> + 'static&gt;",];implementors['mio'] = ["impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/tcp/struct.TcpStream.html' title='mio::tcp::TcpStream'>TcpStream</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/unix/struct.UnixStream.html' title='mio::unix::UnixStream'>UnixStream</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/unix/struct.PipeReader.html' title='mio::unix::PipeReader'>PipeReader</a>","impl&lt;'a&gt; <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for &amp;'a <a class='struct' href='mio/unix/struct.PipeReader.html' title='mio::unix::PipeReader'>PipeReader</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/struct.Io.html' title='mio::Io'>Io</a>","impl&lt;'a&gt; <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for &amp;'a <a class='struct' href='mio/struct.Io.html' title='mio::Io'>Io</a>","impl <a class='trait' href='std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/tcp/struct.TcpStream.html' title='mio::tcp::TcpStream'>TcpStream</a>",];implementors['mioco'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/mio/tcp/struct.TcpStream.html' title='mioco::mio::tcp::TcpStream'>TcpStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/mio/unix/struct.UnixStream.html' title='mioco::mio::unix::UnixStream'>UnixStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/mio/unix/struct.PipeReader.html' title='mioco::mio::unix::PipeReader'>PipeReader</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for &amp;'a <a class='struct' href='mioco/mio/unix/struct.PipeReader.html' title='mioco::mio::unix::PipeReader'>PipeReader</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/mio/struct.Io.html' title='mioco::mio::Io'>Io</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for &amp;'a <a class='struct' href='mioco/mio/struct.Io.html' title='mioco::mio::Io'>Io</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio_orig/sys/unix/tcp/struct.TcpStream.html' title='mio_orig::sys::unix::tcp::TcpStream'>TcpStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio_orig/sys/unix/uds/struct.UnixSocket.html' title='mio_orig::sys::unix::uds::UnixSocket'>UnixSocket</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/struct.EventSource.html' title='mioco::EventSource'>EventSource</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='mioco/mio/trait.TryRead.html' title='mioco::mio::TryRead'>TryRead</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Reflect.html' title='core::marker::Reflect'>Reflect</a> + 'static</span>",];implementors['mioco'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/mio/tcp/struct.TcpStream.html' title='mioco::mio::tcp::TcpStream'>TcpStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/mio/unix/struct.UnixStream.html' title='mioco::mio::unix::UnixStream'>UnixStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/mio/unix/struct.PipeReader.html' title='mioco::mio::unix::PipeReader'>PipeReader</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for &amp;'a <a class='struct' href='mioco/mio/unix/struct.PipeReader.html' title='mioco::mio::unix::PipeReader'>PipeReader</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/mio/struct.Io.html' title='mioco::mio::Io'>Io</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for &amp;'a <a class='struct' href='mioco/mio/struct.Io.html' title='mioco::mio::Io'>Io</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio_orig/sys/unix/tcp/struct.TcpStream.html' title='mio_orig::sys::unix::tcp::TcpStream'>TcpStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio_orig/sys/unix/uds/struct.UnixSocket.html' title='mio_orig::sys::unix::uds::UnixSocket'>UnixSocket</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mioco/struct.EventSource.html' title='mioco::EventSource'>EventSource</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='mioco/mio/trait.TryRead.html' title='mioco::mio::TryRead'>TryRead</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Reflect.html' title='core::marker::Reflect'>Reflect</a> + 'static</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
